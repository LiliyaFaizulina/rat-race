import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { PATH_ROUTES } from 'constants';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to={`/${PATH_ROUTES.gamerPage}`} />
  ) : (
    children
  );
};
