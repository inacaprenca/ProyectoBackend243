import { Layout } from 'antd';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Product from '../../features/product'
import ProductList from '../../features/product/ProductList';
import CarouselLayout from '../carousel';
import CardLayout from '../card';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);

const { Content } = Layout;
const App = () => (
    <Content>
      <CarouselLayout />
      <CardLayout />
        <RouterProvider router={router} />
    </Content>

);
export default App;