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

  return (
    <Section text="Equities">
      <AddEquityForm
        categories={EQUITY_CODE}
        onSubmitBtnClick={onSubmitBtnClick}
      />
      {equities.length > 0 && (
        <EquityList equities={equities} onDeleteBtnClick={onDeleteBtnClick} />
      )}
    </Section>
  );
};

export default EquitiesPage;
