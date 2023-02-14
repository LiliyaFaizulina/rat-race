import { useState } from 'react';
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
import Section from 'components/Section/Section';

const ExpensesPage = () => {
  const [transactionToUpdate, setTransactionToUpdate] = useState(null);
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const onSubmitBtnClick = data => {
    dispatch(addExpense(data));
  };

  const updateTransaction = values => {
    if (
      values.category !== transactionToUpdate.category ||
      values.sum !== transactionToUpdate.sum
    ) {
      const data = { id: transactionToUpdate._id, body: values };
      dispatch(updateExpense(data));
    }
    setTransactionToUpdate(null);
  };

  const deleteTransaction = id => {
    dispatch(deleteExpense(id));
  };

  const openUpdateModal = data => {
    setTransactionToUpdate(data);
  };

  const mainColor = 'danger';
  return (
    <Section text="Expenses" mainColor={mainColor}>
      <div className={`box has-background-${mainColor}-dark`}>
        <TransactionForm
          categories={EXPENSE_CATEGORIES}
          onSubmitBtnClick={onSubmitBtnClick}
          mainColor={mainColor}
          btnText="Add expense"
        />
      </div>
      <div
        className={`box is-relative has-min-height has-background-${mainColor}`}
      >
        <TransactionList
          items={expenses}
          openUpdateModal={openUpdateModal}
          deleteTransaction={deleteTransaction}
          mainColor={mainColor}
        />
        {transactionToUpdate && (
          <TransactionForm
            classes={`box is-absolute-centered has-background-${mainColor}`}
            categories={EXPENSE_CATEGORIES}
            onSubmitBtnClick={updateTransaction}
            transaction={transactionToUpdate}
            btnText="Save changes"
            mainColor={mainColor}
          />
        )}
      </div>
    </Section>
  );
};

export default ExpensesPage;
