import { useDispatch, useSelector } from 'react-redux';
import {
  addIncome,
  deleteIncome,
  updateIncome,
} from 'redux/income/incomeOperations';
import { selectSortedIncome } from 'redux/income/incomeSelectors';
import { INCOME_CATEGORIES } from 'constants';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionList from 'components/TransactionList/TransactionList';
import Section from 'components/Section/Section';

const IncomePage = () => {
  const income = useSelector(selectSortedIncome);
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
    <Section text="Income">
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
    </Section>
  );
};

export default IncomePage;
