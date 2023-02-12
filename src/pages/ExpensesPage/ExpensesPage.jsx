import { useDispatch, useSelector } from 'react-redux';
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from 'redux/expenses/expensesOperations';
import { selectExpenses } from 'redux/expenses/expensesSelectors';
import { EXPENSE_CATEGORIES } from 'constants';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionList from 'components/TransactionList/TransactionList';

const ExpensesPage = () => {
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const onSubmitBtnClick = data => {
    dispatch(addExpense(data));
  };

  const updateTransaction = data => {
    dispatch(updateExpense(data));
  };
  const deleteTransaction = id => {
    dispatch(deleteExpense(id));
  };
  return (
    <div>
      <h2>Expenses</h2>
      <TransactionForm
        categories={EXPENSE_CATEGORIES}
        onSubmitBtnClick={onSubmitBtnClick}
      />
      {expenses.length > 0 && (
        <TransactionList
          categories={EXPENSE_CATEGORIES}
          items={expenses}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
        />
      )}
    </div>
  );
};

export default ExpensesPage;
