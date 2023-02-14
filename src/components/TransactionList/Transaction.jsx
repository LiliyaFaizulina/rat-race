import { RxUpdate } from 'react-icons/rx';
import { MdDeleteForever } from 'react-icons/md';
import Button from 'components/Buttons/Button';
import { chooseCategoryColor } from 'helpers';

const Transaction = ({
  data,
  openUpdateModal,
  deleteTransaction,
  mainColor,
}) => {
  const { _id, category, sum } = data;
  return (
    <tr
      className={`has-background-${chooseCategoryColor(
        category
      )}-light has-text-${chooseCategoryColor(category)}`}
    >
      <td>{category}</td>
      <td>{sum}</td>
      <td className="text-align">
        <Button handleClick={() => openUpdateModal(data)} mainColor={mainColor}>
          <RxUpdate className="icon" />
        </Button>
      </td>
      <td className="text-align">
        <Button
          handleClick={() => deleteTransaction(_id)}
          mainColor={mainColor}
        >
          <MdDeleteForever className="icon" />
        </Button>
      </td>
    </tr>
  );
};

export default Transaction;
