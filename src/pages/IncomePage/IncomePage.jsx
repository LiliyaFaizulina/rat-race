import { useDispatch, useSelector } from 'react-redux';
import {
  addIncome,
  deleteIncome,
  updateIncome,
} from 'redux/income/incomeOperations';
import { selectIncome } from 'redux/income/incomeSelectors';
import { INCOME_CATEGORIES } from 'constants';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionList from 'components/TransactionList/TransactionList';

const IncomePage = () => {
  const income = useSelector(selectIncome);
  const dispatch = useDispatch();
  const onSubmitBtnClick = data => {
    dispatch(addIncome(data));
  };

  const updateTransaction = data => {
    dispatch(updateIncome(data));
  };
  const deleteTransaction = id => {
    dispatch(deleteIncome(id));
  };
  return (
    <div>
      <h2>Income</h2>
      <TransactionForm
        categories={INCOME_CATEGORIES}
        onSubmitBtnClick={onSubmitBtnClick}
      />
      {income.length > 0 && (
        <TransactionList
          categories={INCOME_CATEGORIES}
          items={income}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
        />
      )}
    </div>
  );
};

export default IncomePage;
