import { useFormik } from 'formik';
import * as yup from 'yup';

const AddCreditForm = ({ onSubmitBtnClick }) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Min two letters')
      .max(7, 'Max seven letters'),
    cost: yup
      .number()
      .required('Cost is required')
      .min(0, 'Min 0')
      .max(1000000, 'Max 1 million'),
    monthlyFee: yup
      .number()
      .required('Cost is required')
      .min(0, 'Min 0')
      .max(100000, 'Max 100k'),
  });
  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        cost: '',
        monthlyFee: '',
      },
      validationSchema,
      onSubmit: values => {
        onSubmitBtnClick(values);
        resetForm();
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
        Cost{' '}
        <input
          type="number"
          name="cost"
          value={values.cost}
          onChange={handleChange}
        />
      </label>
      <label>
        Monthly fee{' '}
        <input
          type="number"
          name="monthlyFee"
          value={values.monthlyFee}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add credit</button>
    </form>
  );
};

export default AddCreditForm;
