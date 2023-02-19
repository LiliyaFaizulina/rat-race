import { useState } from 'react';
import Button from 'components/Buttons/Button';

const GamerWallet = ({ cashFlow, totalExpenses, salary }) => {
  const [isJobLose, setIsJobLose] = useState(false);
  const receivable = (!isJobLose ? salary : 0) + cashFlow - totalExpenses;
  const toggleLoseJob = () => {
    setIsJobLose(!isJobLose);
  };
  return (
    <div className="box">
      <table className="table is-fullwidth">
        <tbody>
          <tr className={`has-text-${isJobLose ? 'danger' : 'success'}`}>
            <td>{isJobLose ? 'You lose a job!' : 'You have a job :)'}</td>
            <td className="p-0 text-align">
              <Button
                type="button"
                handleClick={toggleLoseJob}
                mainColor={!isJobLose ? 'danger' : 'success'}
              >
                {isJobLose ? 'Get a job' : 'Lose a job'}
              </Button>
            </td>
          </tr>
          <tr
            className={`has-text-success ${isJobLose ? 'is-crossed-out' : ''}`}
          >
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
            <td>{receivable}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GamerWallet;
