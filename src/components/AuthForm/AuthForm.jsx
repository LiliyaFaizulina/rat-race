import { useFormik } from 'formik';
import * as yup from 'yup';

const AuthForm = ({ onSubmitBtnClick, mainColor }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Min two letters'),
    password: yup
      .string()
      .required('Password is required')
      .min(4, 'Min 4 characters')
      .max(10, 'Max 10 characters'),
  });
  const { handleSubmit, values, handleChange, errors } = useFormik({
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
      <div className="field is-relative pb-2 mb-1">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={`input is-${mainColor}`}
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <p className="help is-absolute has-text-grey">{errors.name}</p>
      </div>
      <div className="field is-relative pb-2 mb-1">
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={`input is-${mainColor}`}
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <p className="help is-absolute has-text-grey">{errors.password}</p>
      </div>
      <button
        type="submit"
        className={`button is-${mainColor} is-light is-fullwidth mt-5`}
      >
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
