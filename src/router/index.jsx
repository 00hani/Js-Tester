import { useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/endpoint";
import App from "../Pages/App/App.jsx";

const allRoutes = [
  {
    path: ROUTES.APP_ROOT,
    element: <App />,
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
