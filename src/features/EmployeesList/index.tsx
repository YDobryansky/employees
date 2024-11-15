import { fetchEmployees } from '@/common/gateway';
import { AppDispatch, RootState } from '@/common/redux/store';
import Failed from '@/features/Error';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeesListComp from './components/employees-list';
import Skeleton from './components/skeleton';

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
