import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../common/redux/store';
import { fetchEmployees } from '../../common/utils/gateway';
import Failed from '../Error';
import EmployeesListComp from './components/employees-list/EmployeesList';
import Skeleton from './components/skeleton/Skeleton';

const EmployeesList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.employees.status);

  useEffect(() => {
    if (status === 'ok') {
      dispatch(fetchEmployees());
    }
  }, [dispatch]);

  let content;

  switch (status) {
    case 'loading':
      content = <Skeleton />;
      break;
    case 'success':
      content = <EmployeesListComp />;
      break;
    case 'failed':
      content = <Failed />;
      break;
    default:
      content = null;
  }

  return (
    <div className="employees">
      <div className="container">{content}</div>
    </div>
  );
};

export default EmployeesList;
