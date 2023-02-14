import { NavLink } from 'react-router-dom';
import {
  GiRat,
  GiReceiveMoney,
  GiTakeMyMoney,
  GiPayMoney,
  GiMoneyStack,
} from 'react-icons/gi';
import { PATH_ROUTES } from 'constants';

const UserMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to={PATH_ROUTES.gamerPage}>
          <GiRat className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.income}>
          <GiReceiveMoney className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.expenses}>
          <GiPayMoney className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.credits}>
          <GiTakeMyMoney className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.equities}>
          <GiMoneyStack className="icon" />
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
