import React from 'react';
import './layout-public.scss';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function LayoutPublic({ children }) {
  return (
    // <div style={{  minHeight: '100vh', margin:0,display: 'flex', flexDirection: 'column' }}>
    <div className='layoutpublicbody'>
      <div className='layoutpublicheader'><Header/></div>
      <div className='layoutpublicarticle'><Outlet /></div>
      <div className='layoutpublicfooter'><Footer/></div>
    </div>
  );
};

export default LayoutPublic;

