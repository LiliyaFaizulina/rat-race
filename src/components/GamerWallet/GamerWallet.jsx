const GamerWallet = ({ cashFlow, totalExpenses, salary }) => {
  return (
    <ul>
      <li>Salary: {salary}</li>
      <li>Cash flow: {cashFlow}</li>
      <li>Total income: {salary + cashFlow}</li>
      <li>Total expenses: {totalExpenses}</li>
      <li>Receivable: {salary + cashFlow - totalExpenses}</li>
    </ul>
  );
};

export default GamerWallet;
