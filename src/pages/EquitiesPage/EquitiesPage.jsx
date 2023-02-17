import { useDispatch, useSelector } from 'react-redux';
import { addEquity, deleteEquity } from 'redux/equities/equitiesOperations';
import { selectSortedEquities } from 'redux/equities/equitiesSelectors';
import { EQUITY_CODE } from 'constants';
import AddEquityForm from 'components/AddEquityForm/AddEquityForm';
import EquityList from 'components/EquityList/EquityList';
import Section from 'components/Section/Section';
import Rat from 'assets/images/rat3.png';

const EquitiesPage = () => {
  const equities = useSelector(selectSortedEquities);
  const dispatch = useDispatch();
  const onSubmitBtnClick = data => {
    dispatch(addEquity(data));
  };
  const onDeleteBtnClick = id => {
    dispatch(deleteEquity(id));
  };
  const mainColor = 'info';
  return (
    <Section text="Equities" mainColor={mainColor}>
      <div className="columns m-0 mb-5">
        <div className={`box has-background-${mainColor}-dark column mb-0`}>
          <AddEquityForm
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
      <div className={`box has-min-height has-background-${mainColor}`}>
        <EquityList
          equities={equities}
          onDeleteBtnClick={onDeleteBtnClick}
          mainColor={mainColor}
        />
      </div>
    </Section>
  );
};

export default EquitiesPage;
