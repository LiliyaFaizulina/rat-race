import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEquity,
  deleteEquity,
  updateEquity,
} from 'redux/equities/equitiesOperations';
import { selectSortedEquities } from 'redux/equities/equitiesSelectors';
import { EQUITY_CODE } from 'constants';
import EquityForm from 'components/EquityForm/EquityForm';
import EquityList from 'components/EquityList/EquityList';
import Section from 'components/Section/Section';
import Rat from 'assets/images/rat3.png';

const EquitiesPage = () => {
  const [transactionToUpdate, setTransactionToUpdate] = useState(null);
  const equities = useSelector(selectSortedEquities);
  const dispatch = useDispatch();

  const onSubmitBtnClick = data => {
    dispatch(addEquity(data));
  };

  const updateTransaction = values => {
    if (
      values.quantity !== transactionToUpdate.quantity ||
      values.price !== transactionToUpdate.price
    ) {
      const data = { id: transactionToUpdate._id, body: values };
      dispatch(updateEquity(data));
    }
    setTransactionToUpdate(null);
  };

  const onDeleteBtnClick = id => {
    dispatch(deleteEquity(id));
  };

  const openUpdateModal = data => {
    setTransactionToUpdate(data);
  };

  const mainColor = 'info';
  return (
    <Section text="Equities" mainColor={mainColor}>
      <div className="columns m-0 mb-5">
        <div className={`box has-background-${mainColor}-dark column mb-0`}>
          <EquityForm
            categories={EQUITY_CODE}
            onSubmitBtnClick={onSubmitBtnClick}
            mainColor={mainColor}
          />
        </div>
        <div className="column p-0 is-one-quarter is-hidden-mobile is-align-self-flex-end">
          <figure className="image is-128x128 ml-auto">
            <img src={Rat} alt="Rat" />
          </figure>
        </div>
      </div>
      <div
        className={`box has-min-height is-relative has-background-${mainColor}`}
      >
        <EquityList
          equities={equities}
          openUpdateModal={openUpdateModal}
          onDeleteBtnClick={onDeleteBtnClick}
          mainColor={mainColor}
        />
        {transactionToUpdate && (
          <EquityForm
            classes={`box is-absolute-centered has-background-${mainColor}`}
            categories={EQUITY_CODE}
            onSubmitBtnClick={updateTransaction}
            equity={transactionToUpdate}
            btnText="Save changes"
            mainColor={mainColor}
            toUpdate={true}
          />
        )}
      </div>
    </Section>
  );
};

export default EquitiesPage;
