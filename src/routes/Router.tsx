import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes/index.tsx";
import PublicLayout from "@/layouts/PublicLayout.tsx";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {publicRoutes.map((route, i) => {
          return (
            <Route
              key={`${route.path}-${i}`}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;
