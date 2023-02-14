import Button from 'components/Buttons/Button';
import { MdDeleteForever, MdOutlinePayments } from 'react-icons/md';

const Credit = ({ item, onPayBtnClick, onDeleteBtnClick, mainColor }) => {
  const { _id, name, cost, monthlyFee } = item;
  return (
    <>
      <td>{name}</td>
      <td>{cost}</td>
      <td>{monthlyFee}</td>
      <td className="text-align">
        <Button handleClick={() => onPayBtnClick(item)} mainColor={mainColor}>
          <MdOutlinePayments className="icon" />
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

export default Credit;
