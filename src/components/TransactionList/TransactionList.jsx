import Transaction from './Transaction';

const TransactionList = ({
  items,
  updateTransaction,
  deleteTransaction,
  categories,
}) => {
  return (
    <ul>
      <li>
        <span>Name</span>
        <span>Sum</span>
        <span>todo</span>
      </li>
      {items.map(item => (
        <Transaction
          key={item._id}
          data={item}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
          categories={categories}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
