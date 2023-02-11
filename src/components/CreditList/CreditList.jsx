import Credit from './Credit';

const CreditList = ({ credits, onPayBtnClick, onDeleteBtnClick }) => {
  return (
    <ul>
      {credits.map(item => (
        <li key={item._id}>
          <Credit
            item={item}
            onPayBtnClick={onPayBtnClick}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default CreditList;
