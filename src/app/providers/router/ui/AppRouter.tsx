import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config';

const AppRouter = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path}
               path={path}
               element={(
                 <Suspense fallback={<div>Loading...</div>}>
                   <div className='page-wrapper'>
                     {element}
                   </div>
                 </Suspense>
          )} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
