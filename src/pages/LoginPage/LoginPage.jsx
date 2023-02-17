import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import Section from 'components/Section/Section';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(login(values));
  };
  const mainColor = 'warning';
  return (
    <Section text="Login" mainColor={mainColor}>
      <div className={`box has-background-${mainColor} has-max-width mx-auto`}>
        <AuthForm onSubmitBtnClick={handleSubmit} mainColor={mainColor} />
      </div>
    </Section>
  );
};

export default LoginPage;
