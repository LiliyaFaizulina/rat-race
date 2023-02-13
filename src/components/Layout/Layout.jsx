import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/Navigation/UserMenu';

const Layout = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <header>
        <nav className="tabs is-centered">
          {isAuth ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
