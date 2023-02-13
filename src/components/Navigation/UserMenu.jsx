import { NavLink } from 'react-router-dom';
import { PATH_ROUTES } from 'constants';

const UserMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to={PATH_ROUTES.gamerPage}>Gamer</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.income}>Income</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.expenses}>Expenses</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.credits}>Credits</NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.equities}>Equities</NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
