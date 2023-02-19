import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { selectIsAuth } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/Navigation/UserMenu';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div className="has-background-warning-light has-full-height">
      <header className="has-background-warning">
        <div className="container is-max-desktop">
          <nav className="tabs is-fullwidth is-boxed is-centered has-background-warning pt-2">
            {isAuth ? <UserMenu /> : <AuthNav />}
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer draggablePercent={60} hideProgressBar theme="colored" />
    </div>
  );
};

export default Layout;
