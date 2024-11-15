import { RootState } from '@/common/redux/store';
import { getDisplayedEmployees, groupedEmployees } from '@/common/utils';
import { Employee } from '@/types';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './index.module.scss';
import NotFoundEmployees from './not-found-employees';

type SortCriteria = 'alphabet' | 'birthday';

const EmployeesListComp: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchTerm = searchParams.get('search') || '';
  const position = searchParams.get('position') || 'all';

  const sortCriteria: SortCriteria = (searchParams.get('sort') as SortCriteria) || 'alphabet';

  const employees = useSelector((state: RootState) => state.employees.employees);
  const sortedEmployees = getDisplayedEmployees(employees, position, searchTerm, sortCriteria);

  const handleEmployeeSelect = (id: string | undefined) => {
    if (id) {
      const currentPathWithParams = `${window.location.pathname}${window.location.search}`;
      navigate(`/employee/${id}`, { state: { from: currentPathWithParams } });
    }
  };

  if (sortedEmployees.length === 0) {
    return <NotFoundEmployees />;
  }

  return (
    <ul className={styles['employees__list']}>
      {Object.keys(groupedEmployees(sortedEmployees, sortCriteria)).map(year => (
        <React.Fragment key={year}>
          {sortCriteria !== 'alphabet' && (
            <li className={styles['employees__year-group']}>
              <span
                className={`${styles['employees__year-border']} ${styles['employees__year-border-left']}`}
              />
              <h3 className={styles['employees__year-title']}>{year}</h3>
              <span
                className={`${styles['employees__year-border']} ${styles['employees__year-border-right']}`}
              />
            </li>
          )}
          {(groupedEmployees(sortedEmployees, sortCriteria) as Record<string, Employee[]>)[
            year
          ].map(employee => (
            <li
              className={styles['employees__item']}
              key={employee.id}
              onClick={() => handleEmployeeSelect(employee.id)}
            >
              <div className={styles['employees__img']}>
                <img className={styles['employees__avatar']} src={employee.avatar} alt="avatar" />
              </div>
              <div className={styles['employees__name']}>
                {employee.name}
                <span className={styles['employees__tag']}>{employee.tag}</span>
                <div className={styles['employees__position']}>
                  {employee.position[0].toUpperCase() + employee.position.slice(1)}
                </div>
              </div>
              <div
                className={styles['employees__birthday']}
                style={sortCriteria !== 'alphabet' ? { display: 'block' } : {}}
              >
                {moment(employee.birthDate).format('D MMM')}
              </div>
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default EmployeesListComp;
