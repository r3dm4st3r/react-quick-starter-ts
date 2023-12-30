import { ReactNode } from "react";
import HomePage from "@/pages/home/HomePage.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";

export interface IPublicRoute {
  path: string;
  element: ReactNode;
}
export const publicRoutes: IPublicRoute[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
