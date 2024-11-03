import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeInfo from './features/EmployeeInfo/EmployeeInfo';
import EmployeesListRender from './features/EmployeesList/EmployeesList';
import Failed from './features/Error';

import Header from './features/Filter';
import './index.scss';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <Header />
        <EmployeesListRender />
      </>
    )
  },
  {
    path: 'employee/:employeeId',
    element: <EmployeeInfo />
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <Failed />
      </>
    )
  }
];

const router = createBrowserRouter(routes, {
  basename: '/'
});

const App: React.FC = () => {
  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
