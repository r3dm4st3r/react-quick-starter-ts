import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
