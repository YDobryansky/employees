import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../common/gateways/index';
import { AppDispatch, RootState } from '../../common/state/store';
import EmployeesList from './components/employees-list/EmployeesList';
import Failed from './components/failed/Failed';
import Skeleton from './components/skeleton/Skeleton';

const EmployeesListRender: React.FC = () => {
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
      content = <EmployeesList />;
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

export default EmployeesListRender;
