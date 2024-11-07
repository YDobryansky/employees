import { AppDispatch, RootState } from '@/common/redux/store';
import { fetchEmployees } from '@/common/utils/gateway';
import NotFoundEmployees from '@employeesListComponents/employees-list/not-found-employees';
import { KeyboardArrowLeft, PhoneOutlined, Star, StarBorder } from '@mui/icons-material';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CallOnNumber from './components/call-on-number';
import SkeletonEmployeeInfo from './components/skeleton-employee-info';
import styles from './index.module.scss';

type LocationState = {
  from: string;
};

const EmployeeInfo: React.FC = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [callOnNumber, setCallOnNumber] = useState(false);
  const navigate = useNavigate();
  const location = useLocation() as { state: LocationState };
  const dispatch: AppDispatch = useDispatch();

  const { employeeId } = useParams<{ employeeId: string }>();
  const employee = useSelector((state: RootState) =>
    state.employees.employees.find(employee => employee.id === employeeId)
  );
  const status = useSelector((state: RootState) => state.employees.status);

  useEffect(() => {
    if (status === 'ok') {
      dispatch(fetchEmployees());
    }
  }, [dispatch]);

  if (status === 'loading') {
    return <SkeletonEmployeeInfo />;
  }

  if (!employee) {
    return <NotFoundEmployees />;
  }

  const { birthDate, avatar, position, name, phone, tag } = employee;

  const birthDateMoment = moment(birthDate).format('D MMMM YYYY');
  const age = moment().diff(moment(birthDate), 'years');

  const handleClose = useCallback(() => {
    const previousPath = location.state?.from || '/';
    navigate(previousPath);
  }, [location, navigate]);

  return (
    <>
      <section className={`${styles['employee-info']} ${callOnNumber ? styles['dimmed'] : ''}`}>
        <div
          className={`${styles['employee-info__container']} ${
            callOnNumber ? styles['dimmed'] : ''
          }`}
        >
          <div className={styles['employee-info__header']}>
            <button className={styles['employee-info__close-btn']} onClick={handleClose}>
              <KeyboardArrowLeft />
            </button>
            <img src={avatar} className={styles['employee-info__img']} alt="avatar" />
            <h3 className={styles['employee-info__name']}>
              {name}
              <span className={styles['employee-info__tag']}>{tag}</span>
            </h3>
            <p className={styles['employee-info__position']}>
              {position[0].toUpperCase() + position.slice(1)}
            </p>
          </div>
        </div>
        <div className={styles['employee-info__wrapper']}>
          <div className={styles['employee-info__age']}>
            <div className={styles['employee-info__star']} onClick={() => setIsStarred(!isStarred)}>
              {isStarred ? <Star /> : <StarBorder />}
            </div>
            {birthDateMoment}
            <span>{age} years</span>
          </div>
          <div className={styles['employee-info__phone']}>
            <PhoneOutlined
              onClick={() => setCallOnNumber(!callOnNumber)}
              className={styles['employee-info__phone-number']}
            />
            {phone}
          </div>
        </div>
      </section>
      {callOnNumber && <CallOnNumber phoneNumber={phone} cancel={setCallOnNumber} />}
    </>
  );
};

export default EmployeeInfo;
