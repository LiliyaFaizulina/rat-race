import { RxUpdate } from 'react-icons/rx';
import { MdDeleteForever } from 'react-icons/md';
import Button from 'components/Buttons/Button';

const Equity = ({ item, onDeleteBtnClick, mainColor, openUpdateModal }) => {
  const { _id, code, quantity, price } = item;
  return (
    <>
      <td>{code}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td className="text-align">
        <Button handleClick={() => openUpdateModal(item)} mainColor={mainColor}>
          <RxUpdate className="icon" />
        </Button>
      </td>
      <td className="text-align">
        <Button handleClick={() => onDeleteBtnClick(_id)} mainColor={mainColor}>
          <MdDeleteForever className="icon" />
        </Button>
      </td>
    </>
  );
};

export default Equity;
