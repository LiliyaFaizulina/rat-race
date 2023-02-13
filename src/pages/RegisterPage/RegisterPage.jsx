import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import AuthForm from 'components/AuthForm/AuthForm';
import Section from 'components/Section/Section';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(register(values));
  };
  return (
    <Section text="Registration">
      <AuthForm onSubmitBtnClick={handleSubmit} />
    </Section>
  );
};

export default RegisterPage;
