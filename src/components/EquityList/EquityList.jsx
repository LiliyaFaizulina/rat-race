import Equity from './Equity';
import { chooseCategoryColor } from 'helpers';

const EquityList = ({ equities, onDeleteBtnClick, mainColor }) => {
  return (
    <table className="table is-fullwidth">
      <thead className={`has-background-${mainColor}`}>
        <tr>
          <th>Name</th>
          <th>Num</th>
          <th>Price</th>
          <th>Sum</th>
          <th className="text-align">Del</th>
        </tr>
      </thead>
      {equities.length > 0 && (
        <tbody>
          {equities.map(item => (
            <tr
              key={item._id}
              className={`has-background-${chooseCategoryColor(
                item.code
              )}-light has-text-${chooseCategoryColor(item.code)}`}
            >
              <Equity
                item={item}
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

export default EquityList;
