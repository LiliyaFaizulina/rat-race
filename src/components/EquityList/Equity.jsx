import Button from 'components/Buttons/Button';

const Equity = ({ item, onDeleteBtnClick }) => {
  const { _id, code, quantity, price } = item;
  return (
    <>
      <span>{code}</span>
      <span>{quantity}</span>
      <span>{price}</span>
      <span>{quantity * price}</span>
      <Button text="Delete" handleClick={() => onDeleteBtnClick(_id)} />
    </>
  );
};

export default Equity;
