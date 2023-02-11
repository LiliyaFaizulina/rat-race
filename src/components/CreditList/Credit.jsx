import Button from 'components/Buttons/Button';

const Credit = ({ item, onPayBtnClick, onDeleteBtnClick }) => {
  const { _id, name, cost, monthlyFee } = item;
  return (
    <>
      <p>{name}</p>
      <p>{cost}</p>
      <p>{monthlyFee}</p>
      <Button text="Pay" handleClick={() => onPayBtnClick(item)} />
      <Button text="Delete" handleClick={() => onDeleteBtnClick(_id)} />
    </>
  );
};

export default Credit;
