import React from 'react';
import  {fetchPost}  from "./data"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from "react-modal";
import ErrorPage from "./component/error"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailPage from './component/userPage/detailPage';

Modal.setAppElement("#root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "detail/:id",
    element: <DetailPage  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//children: [
  //{
 //   path: "contacts/:contactId",
 //   element: <Contact />,
//  },
//]