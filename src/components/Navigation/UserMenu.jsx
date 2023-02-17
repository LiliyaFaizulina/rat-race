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
          <span className="is-hidden-mobile">Player</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.income}>
          <GiReceiveMoney className="icon" />
          <span className="is-hidden-mobile">Income</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.expenses}>
          <GiPayMoney className="icon" />
          <span className="is-hidden-mobile">Expenses</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.credits}>
          <GiTakeMyMoney className="icon" />
          <span className="is-hidden-mobile">Credits</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={PATH_ROUTES.equities}>
          <GiMoneyStack className="icon" />
          <span className="is-hidden-mobile">Equities</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
