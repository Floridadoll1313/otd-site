// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

// Core app shell
import App from "./App.jsx";

// Membership system
import MemberPass from "./components/MemberPass.jsx";
import MemberPortal from "./components/MemberPortal.jsx";
import MemberServices from "./components/MemberServices.jsx";

// Other pages (only include the ones you actually have)
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Interaction from "./pages/Interaction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "interaction", element: <Interaction /> },

      // Membership system
      { path: "memberportal", element: <MemberPortal /> },
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
