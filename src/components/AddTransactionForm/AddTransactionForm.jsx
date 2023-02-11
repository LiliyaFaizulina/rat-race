import { useFormik } from 'formik';
import * as yup from 'yup';
import CategorySelect from 'components/CategorySelect/CategorySelect';

const AddTransactionForm = ({ categories, onSubmitBtnClick }) => {
  const validationSchema = yup.object().shape({
    category: yup.string().required('Category is required'),
    sum: yup
      .number()
      .required('Cost is required')
      .min(0, 'Min 0')
      .max(1000000, 'Max 1 million'),
  });
  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        category: '',
        sum: '',
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
        Category{' '}
        <CategorySelect
          name="category"
          categories={categories}
          value={values.category}
          handleChange={handleChange}
        />
      </label>
      <label>
        Sum{' '}
        <input
          type="number"
          name="sum"
          value={values.sum}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add credit</button>
    </form>
  );
};

export default AddTransactionForm;
