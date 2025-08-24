import { createBrowserRouter, type RouteObject } from 'react-router';
import Scorecard from '../components/Scorecard';
import App from '../App';
import Auth from './Auth';
import PrivateRoute from '../components/common/PrivateRoute';
import PublicRoute from '../components/common/PublicRoute';
import Home from './Home';

const publicRoutes: RouteObject[] = [
  {
    Component: PublicRoute,
    children: [
      {
        path: '/auth',
        Component: Auth,
      },
      {
        path: '/scorecard',
        Component: Scorecard,
      },
    ],
  },
];

const privateRoutes: RouteObject[] = [
  {
    Component: PrivateRoute,
    children: [
      {
        path: '/',
        Component: Home,
      },
    ],
  },
];

export default createBrowserRouter([
  { Component: App, children: [...publicRoutes, ...privateRoutes] },
]);
