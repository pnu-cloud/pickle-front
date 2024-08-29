import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div style={styles.container}>
      <Header style={styles.header} />
      <div style={styles.body}>
        <Sidebar style={styles.sidebar} />
        <main style={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer style={styles.footer} />
    </div>
  );
};

// 스타일 정의
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
  },
  footer: {
    marginTop: 'auto',
  },
};

export default MainLayout;
