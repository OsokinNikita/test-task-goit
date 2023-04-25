import 'modern-normalize';
import { GlobalStyles } from './GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home/Home'));
const TweetsPage = lazy(() => import('pages/TweetsPage/TweetsPage'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
