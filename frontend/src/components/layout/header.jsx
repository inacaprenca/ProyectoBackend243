import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;
const App = () => (

    <Header>
       <a href={`/`}>Home</a> | <a href={`/products`}>Productos</a>

    </Header>

);
export default App;