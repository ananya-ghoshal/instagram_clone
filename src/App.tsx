import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { get as getIdb } from "idb-keyval";

import "./App.css";

import Homepage from "./Homepage";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

const router = createBrowserRouter([
  {
    element: <Homepage />,
    path: "/",
    loader: async () => {
      const userId = await getIdb<number>("userId");
      if (userId === undefined) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
