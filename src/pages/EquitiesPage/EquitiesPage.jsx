import { useDispatch, useSelector } from 'react-redux';
import { addEquity, deleteEquity } from 'redux/equities/equitiesOperations';
import { selectEquities } from 'redux/equities/equitiesSelectors';
import { EQUITY_CODE } from 'constants';
import AddEquityForm from 'components/AddEquityForm/AddEquityForm';
import EquityList from 'components/EquityList/EquityList';

const EquitiesPage = () => {
  const equities = useSelector(selectEquities);
  const dispatch = useDispatch();
  const onSubmitBtnClick = data => {
    dispatch(addEquity(data));
  };
  const onDeleteBtnClick = id => {
    dispatch(deleteEquity(id));
  };

  return (
    <div>
      <h2>Equities</h2>{' '}
      <AddEquityForm
        categories={EQUITY_CODE}
        onSubmitBtnClick={onSubmitBtnClick}
      />
      {equities.length > 0 && (
        <EquityList equities={equities} onDeleteBtnClick={onDeleteBtnClick} />
      )}
    </div>
  );
};

export default EquitiesPage;
