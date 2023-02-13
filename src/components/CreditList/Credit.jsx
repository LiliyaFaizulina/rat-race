import Button from 'components/Buttons/Button';
import { MdDeleteForever, MdOutlinePayments } from 'react-icons/md';

const Credit = ({ item, onPayBtnClick, onDeleteBtnClick }) => {
  const { _id, name, cost, monthlyFee } = item;
  return (
    <>
      <p>{name}</p>
      <p>{cost}</p>
      <p>{monthlyFee}</p>
      <Button handleClick={() => onPayBtnClick(item)}>
        <MdOutlinePayments className="icon" />
      </Button>
      <Button handleClick={() => onDeleteBtnClick(_id)}>
        <MdDeleteForever className="icon" />
      </Button>
    </>
  );
};

export default Credit;
