import { useFormik } from 'formik';
import * as yup from 'yup';

const AuthForm = ({ onSubmitBtnClick }) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Min two letters')
      .max(7, 'Max seven letters'),
    password: yup
      .string()
      .required('Name is required')
      .min(4, 'Min 4 characters')
      .max(10, 'Max 10 characters'),
  });
  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      onSubmitBtnClick(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name{' '}
        <input
          className="input is-primary"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Password{' '}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
