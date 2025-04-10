import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const PublicLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default PublicLayout;
