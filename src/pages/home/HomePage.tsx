import { lazy, Suspense } from 'react';

const Welcome = lazy(() => import('@components/dummy/Welcome.tsx'));
const HomePage = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Welcome />
      </Suspense>
    </div>
  );
};

export default HomePage;
