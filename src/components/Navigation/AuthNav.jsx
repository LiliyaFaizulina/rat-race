import { NavLink } from 'react-router-dom';
import { PATH_ROUTES } from 'constants';

const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.register}>Register</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.login}>Login</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
