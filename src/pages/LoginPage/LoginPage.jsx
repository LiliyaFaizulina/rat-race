import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import Section from 'components/Section/Section';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(login(values));
  };
  return (
    <Section text="Login">
      <AuthForm onSubmitBtnClick={handleSubmit} />
    </Section>
  );
};

export default LoginPage;
