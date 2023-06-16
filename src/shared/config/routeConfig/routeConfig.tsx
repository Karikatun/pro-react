import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/notFound';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths.notFound,
    element: <NotFoundPage />
  }
};
