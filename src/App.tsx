import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeInfo from './components/employee-info/EmployeeInfo';
import EmployeesListRender from './components/employees-render/EmployeesListRender';
import Failed from './components/employees-render/components/failed/Failed';
import Header from './components/header/Header';
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
