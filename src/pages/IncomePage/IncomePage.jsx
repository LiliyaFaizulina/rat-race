import { useState } from 'react';
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
import Rat from 'assets/images/rat2.png';

const IncomePage = () => {
  const [transactionToUpdate, setTransactionToUpdate] = useState(null);
  const income = useSelector(selectSortedIncome);
  const dispatch = useDispatch();

  const onSubmitBtnClick = data => {
    dispatch(addIncome(data));
  };

  const updateTransaction = values => {
    if (
      values.category !== transactionToUpdate.category ||
      values.sum !== transactionToUpdate.sum
    ) {
      const data = { id: transactionToUpdate._id, body: values };
      dispatch(updateIncome(data));
    }
    setTransactionToUpdate(null);
  };

  const deleteTransaction = id => {
    dispatch(deleteIncome(id));
  };

  const openUpdateModal = data => {
    setTransactionToUpdate(data);
  };

  const mainColor = 'success';
  return (
    <Section text="Income" mainColor={mainColor}>
      <div className="columns m-0 mb-5">
        <div className={`box has-background-${mainColor}-dark column mb-0`}>
          <TransactionForm
            categories={INCOME_CATEGORIES}
            onSubmitBtnClick={onSubmitBtnClick}
            mainColor={mainColor}
            btnText="Add income"
          />
        </div>
        <div className="column p-0 is-one-quarter is-hidden-mobile is-align-self-flex-end">
          <figure className="image is-128x128 ml-auto is-flex is-align-items-end">
            <img src={Rat} alt="Rat" />
          </figure>
        </div>
      </div>
      <div
        className={`box is-relative has-min-height has-background-${mainColor}`}
      >
        <TransactionList
          items={income}
          openUpdateModal={openUpdateModal}
          deleteTransaction={deleteTransaction}
          mainColor={mainColor}
        />
        {transactionToUpdate && (
          <TransactionForm
            classes={`box is-absolute-centered has-background-${mainColor}`}
            categories={INCOME_CATEGORIES}
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

export default IncomePage;
