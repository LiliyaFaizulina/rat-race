import { useDispatch, useSelector } from 'react-redux';
import {
  addCredit,
  deleteCredit,
  updateCredit,
} from 'redux/credits/creditsOperations';
import CreditList from 'components/CreditList/CreditList';
import AddCreditForm from 'components/AddCreditForm/AddCreditForm';
import { selectCredits } from 'redux/credits/creditsSelectors';

const CreditsPage = () => {
  const dispatch = useDispatch();
  const credits = useSelector(selectCredits);

  const onPayBtnClick = item => {
    const newCreditBalance = item.cost - item.monthlyFee;
    const data = { id: item._id, body: { cost: newCreditBalance } };
    dispatch(updateCredit(data));
  };

  const onDeleteBtnClick = id => {
    dispatch(deleteCredit(id));
  };

  const onSubmitBtnClick = values => {
    dispatch(addCredit(values));
  };

  return (
    <div>
      <h2>Credits</h2>
      <AddCreditForm onSubmitBtnClick={onSubmitBtnClick} />
      {credits.length > 0 && (
        <CreditList
          onPayBtnClick={onPayBtnClick}
          onDeleteBtnClick={onDeleteBtnClick}
          credits={credits}
        />
      )}
    </div>
  );
};

export default CreditsPage;
