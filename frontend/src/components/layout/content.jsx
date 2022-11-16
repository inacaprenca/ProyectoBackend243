import { Layout } from 'antd';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Product from '../../features/product'
import ReactDOM from "react-dom/client";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/products",
    element: <Product />,
  },
]);

const { Content } = Layout;
const App = () => (
    <Content>
        <RouterProvider router={router} />
    </Content>

);
export default App;