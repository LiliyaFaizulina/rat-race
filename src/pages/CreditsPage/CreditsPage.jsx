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
import Rat from 'assets/images/rat2.png';

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
      <div className="columns m-0 mb-5">
        <div className={`box has-background-${mainColor}-dark column mb-0`}>
          <AddCreditForm
            onSubmitBtnClick={onSubmitBtnClick}
            mainColor={mainColor}
          />
        </div>
        <div className="column p-0 is-one-quarter is-hidden-mobile is-align-self-flex-end">
          <figure className="image is-128x128 ml-auto is-flex is-align-items-end">
            <img src={Rat} alt="Rat" />
          </figure>
        </div>
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
