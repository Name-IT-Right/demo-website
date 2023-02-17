import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home";
import { S3Demo } from "../s3";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/s3", element: <S3Demo /> },
],
  { basename: '/demo-website' }
);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
