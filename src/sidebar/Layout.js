import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyContentList from './myContentList';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarOpen && <Sidebar />}
      <MyContentList />
    </div>
  );
};

export default Layout;        