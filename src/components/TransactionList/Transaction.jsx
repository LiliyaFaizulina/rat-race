import Button from 'components/Buttons/Button';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import { useState } from 'react';

const Transaction = ({
  data,
  updateTransaction,
  deleteTransaction,
  categories,
}) => {
  const [transactionToUpdate, setTransactionToUpdate] = useState(null);
  const onSubmitBtnClick = values => {
    const data = { id: transactionToUpdate._id, body: values };
    updateTransaction(data);
    setTransactionToUpdate(null);
  };
  return (
    <li>
      <span>{data.category}</span>
      <span>{data.sum}</span>
      <Button text="update" handleClick={() => setTransactionToUpdate(data)} />
      <Button text="delete" handleClick={() => deleteTransaction(data._id)} />
      {transactionToUpdate && (
        <TransactionForm
          categories={categories}
          onSubmitBtnClick={onSubmitBtnClick}
          transaction={transactionToUpdate}
        />
      )}
    </li>
  );
};

export default Transaction;
