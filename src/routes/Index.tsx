import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../layout/Index";

// ----------------------------------------------------------------------

const Home = lazy(() => import("../pages/Home"));
// const GetAllUsers = lazy(() => import('src/pages/GetAllUsers'));
// const UserProfile = lazy(() => import('src/pages/UserProfile'));
// const Applications = lazy(() => import('src/pages/Applications'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: (
            <Layout />
          ),
          children: [
            {
              index: true,
              element: <Home />,
            },
            // {
            //   path: 'users',
            //   element: <GetAllUsers />,
            // },
            // {
            //   path: 'users/:id',
            //   element: <UserProfile />,
            // },
            // {
            //   path: 'applications',
            //   element: <Applications />,
            // },
          ],
        },
      ],
    },
  ]);
}
