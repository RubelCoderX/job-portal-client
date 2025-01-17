import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Home/Home";
import Register from "../component/Authentcation/Register/Register";
import Login from "../component/Authentcation/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
