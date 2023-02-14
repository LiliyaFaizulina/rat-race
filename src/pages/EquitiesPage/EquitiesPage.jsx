import { useDispatch, useSelector } from 'react-redux';
import { addEquity, deleteEquity } from 'redux/equities/equitiesOperations';
import { selectSortedEquities } from 'redux/equities/equitiesSelectors';
import { EQUITY_CODE } from 'constants';
import AddEquityForm from 'components/AddEquityForm/AddEquityForm';
import EquityList from 'components/EquityList/EquityList';
import Section from 'components/Section/Section';

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
      <div className={`box has-background-${mainColor}-dark`}>
        <AddEquityForm
          categories={EQUITY_CODE}
          onSubmitBtnClick={onSubmitBtnClick}
          mainColor={mainColor}
        />
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
