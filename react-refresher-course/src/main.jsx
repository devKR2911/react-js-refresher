import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts/Posts.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {
  action as newPostFormAction,
} from "./routes/NewPost/NewPost.jsx";
import RootLayout from "./routes/RootLayout/RootLayout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/new-post",
            element: <NewPost />,
            action: newPostFormAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
