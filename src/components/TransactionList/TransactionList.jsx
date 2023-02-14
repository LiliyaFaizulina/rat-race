import Transaction from './Transaction';

const TransactionList = ({
  items,
  openUpdateModal,
  deleteTransaction,
  mainColor,
}) => {
  return (
    <table className="table is-fullwidth">
      <thead className={`has-background-${mainColor}`}>
        <tr>
          <th>Category</th>
          <th>Sum</th>
          <th className="text-align">Upd</th>
          <th className="text-align">Del</th>
        </tr>
      </thead>
      {items.length > 0 && (
        <tbody>
          {items.map(item => (
            <Transaction
              key={item._id}
              data={item}
              openUpdateModal={openUpdateModal}
              deleteTransaction={deleteTransaction}
              mainColor={mainColor}
            />
          ))}
        </tbody>
      )}
    </table>
  );
};

export default TransactionList;
