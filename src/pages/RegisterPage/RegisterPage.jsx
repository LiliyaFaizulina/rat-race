import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(register(values));
  };
  return <AuthForm onSubmitBtnClick={handleSubmit} />;
};

export default RegisterPage;
