import React from 'react';
import Sidebar from './sidebar';


const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-60 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
