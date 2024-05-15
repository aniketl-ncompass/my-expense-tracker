import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "./views/Dashboard/DashboardContainer";
import DashboardOutlet from "./views/Dashboard/Dashboard";
import Account from "./views/Dashboard/Account";
import Settings from "./views/Dashboard/Settings";

const isUserLoggedIn = () => {
  const user = localStorage.getItem("loggedIn");
  if (!user) return redirect("/auth/signin");
  return redirect("dashboard");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: "home",
    // TODO:Check login status of the user
    loader: isUserLoggedIn,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardOutlet />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        index: true,
        loader: isUserLoggedIn,
      },
      {
        path: "signup",
        element: "sing up",
      },
      {
        path: "signin",
        element: "sign in",
      },
    ],
  },
]);
export default router;
