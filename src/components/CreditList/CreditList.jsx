import Credit from './Credit';
import { chooseCategoryColor } from 'helpers';

const CreditList = ({
  credits,
  onPayBtnClick,
  onDeleteBtnClick,
  mainColor,
}) => {
  return (
    <table className="table is-fullwidth">
      <thead className={`has-background-${mainColor}`}>
        <tr>
          <th>Name</th>
          <th>Cost</th>
          <th>Fee</th>
          <th className="text-align">Pay</th>
          <th className="text-align">Del</th>
        </tr>
      </thead>
      {credits.length > 0 && (
        <tbody>
          {credits.map((item, index) => (
            <tr
              key={item._id}
              className={`has-background-${chooseCategoryColor(
                index
              )}-light has-text-${chooseCategoryColor(index)}`}
            >
              <Credit
                item={item}
                onPayBtnClick={onPayBtnClick}
                onDeleteBtnClick={onDeleteBtnClick}
                mainColor={mainColor}
              />
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default CreditList;
