import { Layout } from 'antd';
import React from 'react';
import HeaderLayout from './header';
import ContentLayout from './content';
import FooterLayout from './footer';

const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  <>
    <Layout>
      <HeaderLayout>Header</HeaderLayout>
      <ContentLayout>Content</ContentLayout>
      <FooterLayout>Footer</FooterLayout>
    </Layout>
  </>
);
export default App;