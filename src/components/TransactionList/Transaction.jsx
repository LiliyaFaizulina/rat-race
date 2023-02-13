import { RxUpdate } from 'react-icons/rx';
import { MdDeleteForever } from 'react-icons/md';
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
      <Button handleClick={() => setTransactionToUpdate(data)}>
        <RxUpdate className="icon" />
      </Button>
      <Button handleClick={() => deleteTransaction(data._id)}>
        <MdDeleteForever className="icon" />
      </Button>
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
