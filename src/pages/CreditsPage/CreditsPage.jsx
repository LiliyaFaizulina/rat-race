import { useDispatch, useSelector } from 'react-redux';
import {
  addCredit,
  deleteCredit,
  updateCredit,
} from 'redux/credits/creditsOperations';
import { selectCredits } from 'redux/credits/creditsSelectors';
import Section from 'components/Section/Section';
import CreditList from 'components/CreditList/CreditList';
import AddCreditForm from 'components/AddCreditForm/AddCreditForm';

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

  const mainColor = 'warning';

  return (
    <Section text="credits" mainColor={mainColor}>
      <div className={`box has-background-${mainColor}-dark`}>
        <AddCreditForm
          onSubmitBtnClick={onSubmitBtnClick}
          mainColor={mainColor}
        />
      </div>
      <div className={`box has-min-height has-background-${mainColor}`}>
        <CreditList
          onPayBtnClick={onPayBtnClick}
          onDeleteBtnClick={onDeleteBtnClick}
          credits={credits}
          mainColor={mainColor}
        />
      </div>
    </Section>
  );
};

export default CreditsPage;
