import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import AuthForm from 'components/AuthForm/AuthForm';
import Section from 'components/Section/Section';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(register(values));
  };
  const mainColor = 'primary';
  return (
    <Section text="Registration" mainColor={mainColor}>
      <div className={`box has-background-${mainColor} has-max-width mx-auto`}>
        <AuthForm onSubmitBtnClick={handleSubmit} mainColor={mainColor} />
      </div>
    </Section>
  );
};

export default RegisterPage;
