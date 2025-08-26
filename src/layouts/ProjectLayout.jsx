import React from 'react';
import { Outlet } from 'react-router';

const ProjectLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default ProjectLayout;