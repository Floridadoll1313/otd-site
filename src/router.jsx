import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Public pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Interaction from "./pages/Interaction";

// Membership system
import MemberPass from "./components/MemberPass";
import MemberPortal from "./components/MemberPortal";
import MemberServices from "./components/MemberServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "interaction",
        element: <Interaction />,
      },

      // Membership routes
      {
        path: "memberportal",
        element: (
          <MemberPass>
            <MemberPortal />
          </MemberPass>
        ),
      },
      {
        path: "memberservices",
        element: (
          <MemberPass>
            <MemberServices />
          </MemberPass>
        ),
      },
    ],
  },
]);

export default router;
