import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import NotFound from "./NotFound";
import Register from "./Pages/Register";
import Root from './Pages/Root';
import Posts from "./Pages/Posts";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AddPost from "./Pages/CreatePosts"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children:[ 
        {
          path:"posts",
          element:<Posts />,
        },
        {
          path:"profile",
          element: <Profile />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
      ],
    },

  ]);
// the colon: means this specific thing is a route parameter will render specific posts, gives it the functionality, takes database ID and shows the infomation
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
