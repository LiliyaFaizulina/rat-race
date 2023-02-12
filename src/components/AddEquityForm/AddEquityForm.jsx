import { useFormik } from 'formik';
import * as yup from 'yup';
import CategorySelect from 'components/CategorySelect/CategorySelect';

const AddEquityForm = ({ categories, onSubmitBtnClick }) => {
  const validationSchema = yup.object().shape({
    code: yup.string().required('Code is required'),
    quantity: yup
      .number()
      .required('Quantity is required')
      .min(0, 'Min 0')
      .max(1000000, 'Max 1 million'),
    price: yup
      .number()
      .required('Price is required')
      .min(0, 'Min 0')
      .max(100000, 'Max 100k'),
  });
  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        code: '',
        quantity: '',
        price: '',
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
          name="code"
          categories={categories}
          value={values.code}
          handleChange={handleChange}
        />
      </label>
      <label>
        Quantity{' '}
        <input
          type="number"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Price{' '}
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEquityForm;
