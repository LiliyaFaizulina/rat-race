import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import { EXPENSE_CATEGORIES } from 'constants';
const ExpensesPage = () => {
  const onSubmitBtnClick = data => {
    console.log(data);
  };
  return (
    <div>
      <h2>Expenses</h2>
      <AddTransactionForm
        categories={EXPENSE_CATEGORIES}
        onSubmitBtnClick={onSubmitBtnClick}
      />
    </div>
  );
};

export default ExpensesPage;
