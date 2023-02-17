import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home";
import { S3Demo } from "../s3";
import { SagemakerDemo } from "../sagemaker";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/s3", element: <S3Demo /> },
  { path: "/sagemaker", element: <SagemakerDemo /> },
],
  { basename: '/demo-website' }
);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
