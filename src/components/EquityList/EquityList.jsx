import Equity from './Equity';

const EquityList = ({ equities, onDeleteBtnClick }) => {
  return (
    <ul>
      <li>
        <span>code</span>
        <span>quantity</span>
        <span>price</span>
        <span>sum</span>
        <span>todo</span>
      </li>
      {equities.map(item => (
        <li key={item._id}>
          <Equity item={item} onDeleteBtnClick={onDeleteBtnClick} />
        </li>
      ))}
    </ul>
  );
};

export default EquityList;
