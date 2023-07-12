import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer'
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};
export default Layout;