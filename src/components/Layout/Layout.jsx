import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/Navigation/UserMenu';

const Layout = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div className="has-background-warning-light has-full-height">
      <header>
        <nav className="tabs is-fullwidth is-boxed is-centered has-background-warning pt-2">
          {isAuth ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
