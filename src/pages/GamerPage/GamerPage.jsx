import { useSelector } from 'react-redux';
import { selectGamer } from 'redux/auth/authSelectors';
import { selectIncome } from 'redux/income/incomeSelectors';
import { selectExpenses } from 'redux/expenses/expensesSelectors';
import { selectCredits } from 'redux/credits/creditsSelectors';

import GamerCard from 'components/GamerCard/GamerCard';
import GamerWallet from 'components/GamerWallet/GamerWallet';
import Section from 'components/Section/Section';

const GamerPage = () => {
  const gamer = useSelector(selectGamer);
  const income = useSelector(selectIncome);
  const expenses = useSelector(selectExpenses);
  const credits = useSelector(selectCredits);

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

  return (
    <Section text="Gamer">
      <GamerCard data={gamer} />
      <GamerWallet
        totalExpenses={totalExpenses}
        salary={salary}
        cashFlow={cashFlow}
      />
    </Section>
  );
};

export default GamerPage;
