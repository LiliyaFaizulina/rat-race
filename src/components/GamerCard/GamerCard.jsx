import { useState } from 'react';
import { RxUpdate } from 'react-icons/rx';
import Button from 'components/Buttons/Button';
import UpdateGamerForm from 'components/UpdateGamerForm/UpdateGamerForm';
import { useDispatch } from 'react-redux';
import { updateGamer } from 'redux/auth/authOperations';

const GamerCard = ({ data }) => {
  const [fieldToUpdate, setFieldToUpdate] = useState(null);
  const dispatch = useDispatch();
  const cardFields = [
    { name: 'Name', fieldType: 'text', fieldName: 'name' },
    { name: 'Position', fieldType: 'text', fieldName: 'position' },
    { name: 'Dream', fieldType: 'text', fieldName: 'dream' },
    { name: 'Dream cost', fieldType: 'number', fieldName: 'dreamCost' },
    { name: 'Children', fieldType: 'number', fieldName: 'children' },
    { name: 'Debt', fieldType: 'number', fieldName: 'debt' },
  ];

  const onSubmitBtnClick = values => {
    if (values) {
      dispatch(updateGamer(values));
    }
    setFieldToUpdate(null);
  };

  const showInput = data => {
    setFieldToUpdate(data);
  };
  return (
    <ul>
      {cardFields.map(({ fieldName, fieldType, name }, index) => (
        <li key={index}>
          <span>{name}:</span>
          {fieldToUpdate && fieldToUpdate === fieldName ? (
            <UpdateGamerForm
              fieldValue={data[fieldName]}
              fieldType={fieldType}
              fieldName={fieldName}
              onSubmitBtnClick={onSubmitBtnClick}
            />
          ) : (
            <>
              <span>{data[fieldName]}</span>
              <Button handleClick={() => showInput(fieldName)}>
                <RxUpdate className="icon" />
              </Button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default GamerCard;
