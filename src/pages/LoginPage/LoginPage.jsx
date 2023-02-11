import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(login(values));
  };
  return <AuthForm onSubmitBtnClick={handleSubmit} />;
};

export default LoginPage;
