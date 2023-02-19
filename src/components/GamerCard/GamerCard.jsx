import { useState } from 'react';
import { RxUpdate } from 'react-icons/rx';

import UpdateGamerForm from 'components/UpdateGamerForm/UpdateGamerForm';
import { useDispatch } from 'react-redux';
import { updateGamer } from 'redux/auth/authOperations';

const GamerCard = ({ data, mainColor }) => {
  const [fieldToUpdate, setFieldToUpdate] = useState(null);
  const dispatch = useDispatch();
  const cardFields = [
    { name: 'Name', fieldType: 'text', fieldName: 'name' },
    { name: 'Position', fieldType: 'text', fieldName: 'position' },
    { name: 'Dream', fieldType: 'text', fieldName: 'dream' },
    { name: 'Dream cost', fieldType: 'number', fieldName: 'dreamCost' },
    { name: 'Children', fieldType: 'number', fieldName: 'children' },
    { name: 'Debt', fieldType: 'number', fieldName: 'debt' },
    { name: 'Notes', fieldType: 'text', fieldName: 'note' },
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
    <ul className={`box has-background-${mainColor} column mb-0`}>
      {cardFields.map(({ fieldName, fieldType, name }, index) => (
        <li
          key={index}
          className={`columns is-mobile m-0  is-align-items-center`}
        >
          <div
            className={`column is-one-third m-0 has-background-${mainColor}`}
          >
            {name}:
          </div>
          <div
            className={`column columns p-0 m-0 is-mobile has-background-${mainColor}-light`}
          >
            {fieldToUpdate && fieldToUpdate === fieldName ? (
              <UpdateGamerForm
                fieldValue={data[fieldName]}
                fieldType={fieldType}
                fieldName={fieldName}
                mainColor={mainColor}
                onSubmitBtnClick={onSubmitBtnClick}
              />
            ) : (
              <>
                <div className={`column auto`}>{data[fieldName]}</div>
                <button
                  onClick={() => showInput(fieldName)}
                  className={`column is-one-fifth button is-flex is-${mainColor} is-inverted has-background-${mainColor}-light`}
                >
                  <RxUpdate className="icon is-small" />
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GamerCard;
