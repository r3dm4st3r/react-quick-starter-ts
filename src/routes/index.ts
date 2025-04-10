import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/pages/error/ErrorPage.tsx';
import PublicLayout from '@/layouts/PublicLayout.tsx';
import HomePage from '@/pages/home/HomePage.tsx';
import ContactPage from '@/pages/contact/ContactPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'contact',
        Component: ContactPage
      }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);
