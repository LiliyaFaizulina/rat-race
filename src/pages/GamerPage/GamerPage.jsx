import { useDispatch, useSelector } from 'react-redux';
import { selectGamer } from 'redux/auth/authSelectors';
import { selectIncome } from 'redux/income/incomeSelectors';
import { selectExpenses } from 'redux/expenses/expensesSelectors';
import { selectCredits } from 'redux/credits/creditsSelectors';
import { logout } from 'redux/auth/authOperations';
import Rat from 'assets/images/rat3.png';
import GamerCard from 'components/GamerCard/GamerCard';
import GamerWallet from 'components/GamerWallet/GamerWallet';
import Section from 'components/Section/Section';
import Button from 'components/Buttons/Button';

const GamerPage = () => {
  const gamer = useSelector(selectGamer);
  const income = useSelector(selectIncome);
  const expenses = useSelector(selectExpenses);
  const credits = useSelector(selectCredits);
  const dispatch = useDispatch();

  const onBtnLogoutClick = () => {
    dispatch(logout());
  };

  const amountOfChildren = gamer.children;
  let cashFlow = 0;
  let salary = 0;
  let creditFee = 0;
  let otherExpenses = 0;

  if (income.length > 0) {
    income.forEach(element => {
      if (element.category === 'salary') {
        salary += element.sum;
      } else {
        cashFlow += element.sum;
      }
    });
  }

  if (credits.length > 0) {
    credits.forEach(credit => {
      creditFee += credit.monthlyFee;
    });
  }

  if (expenses.length > 0) {
    expenses.forEach(expense => {
      otherExpenses +=
        expense.category === 'children'
          ? expense.sum * amountOfChildren
          : expense.sum;
    });
  }

  const totalExpenses = creditFee + otherExpenses;
  const mainColor = 'primary';

  return (
    <Section text="Player" mainColor={mainColor}>
      <div className="columns m-0 mb-5">
        <GamerCard data={gamer} mainColor={mainColor} />
        <div className="column p-0 is-one-quarter is-hidden-mobile is-align-self-flex-end">
          <figure className="image is-128x128 ml-auto">
            <img src={Rat} alt="Rat" />
          </figure>
        </div>
      </div>

      <GamerWallet
        totalExpenses={totalExpenses}
        salary={salary}
        cashFlow={cashFlow}
        mainColor={mainColor}
      />
      <div className="box is-flex is-justify-content-end">
        <p className="mr-5">To create new player you should logout</p>
        <Button handleClick={onBtnLogoutClick} mainColor={mainColor}>
          Logout
        </Button>
      </div>
    </Section>
  );
};

export default GamerPage;
