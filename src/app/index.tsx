import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home";
import { S3Demo } from "../s3";
import { SagemakerDemo } from "../sagemaker";
import { Page404 } from "./404";

const router = createHashRouter([
  { path: "/", element: <Home />, errorElement: <Page404 /> },
  { path: "/s3", element: <S3Demo /> },
  { path: "/sagemaker", element: <SagemakerDemo /> },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
