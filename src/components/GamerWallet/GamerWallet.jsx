const GamerWallet = ({ cashFlow, totalExpenses, salary }) => {
  return (
    <div className="box">
      <table className="table is-fullwidth">
        <tbody>
          <tr className="has-text-success">
            <td>Salary:</td>
            <td>{salary}</td>
          </tr>
          <tr className="has-text-success-dark">
            <td>Cash flow:</td>
            <td>{cashFlow}</td>
          </tr>
          <tr className="has-background-success">
            <td>Total income:</td>
            <td>{salary + cashFlow}</td>
          </tr>
          <tr className="has-background-danger">
            <td>Total expenses:</td>
            <td>{totalExpenses}</td>
          </tr>
          <tr className="has-background-primary">
            <td>Receivable:</td>
            <td>{salary + cashFlow - totalExpenses}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GamerWallet;
