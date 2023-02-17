import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';
import { HiPencilSquare } from 'react-icons/hi2';
import { GoSignIn } from 'react-icons/go';
import { PATH_ROUTES } from 'constants';

const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" end>
          <AiTwotoneHome className="icon" />
          <span className="is-hidden-mobile">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.register}>
          <HiPencilSquare className="icon" />
          <span className="is-hidden-mobile">Register</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.login}>
          <GoSignIn className="icon" />
          <span className="is-hidden-mobile">Login</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
