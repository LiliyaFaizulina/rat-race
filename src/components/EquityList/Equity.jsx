import { MdDeleteForever } from 'react-icons/md';
import Button from 'components/Buttons/Button';

const Equity = ({ item, onDeleteBtnClick }) => {
  const { _id, code, quantity, price } = item;
  return (
    <>
      <span>{code}</span>
      <span>{quantity}</span>
      <span>{price}</span>
      <span>{quantity * price}</span>
      <Button handleClick={() => onDeleteBtnClick(_id)}>
        <MdDeleteForever className="icon" />
      </Button>
    </>
  );
};

export default Equity;
