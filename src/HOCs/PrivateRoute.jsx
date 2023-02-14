import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { PATH_ROUTES } from 'constants';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  return isLoggedIn ? children : <Navigate to={`/${PATH_ROUTES.login}`} />;
};
