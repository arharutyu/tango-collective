import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

import Layout from "../layout/Index";

// ----------------------------------------------------------------------

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import('../pages/About'));
const TangoJourney = lazy(() => import('../pages/TangoJourney'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const UpcomingEvents = lazy(() => import('../pages/UpcomingEvents'));

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
            {
              path: 'about',
              element: <About />,
            },
            {
              path: 'tango-journey',
              element: <TangoJourney />,
            },
            {
              path: 'contact-us',
              element: <ContactUs />,
            },
            {
              path: 'upcoming-events',
              element: <UpcomingEvents />,
            },
          ],
        },
      ],
    },
  ]);
}
