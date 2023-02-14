import { useFormik } from 'formik';
import * as yup from 'yup';
import CategorySelect from 'components/CategorySelect/CategorySelect';

const TransactionForm = ({
  categories,
  onSubmitBtnClick,
  transaction = { category: '', sum: '' },
  mainColor,
  classes = '',
  btnText = 'Submit',
}) => {
  const validationSchema = yup.object().shape({
    category: yup.string().required('Category is required'),
    sum: yup
      .number()
      .required('Sum is required')
      .min(0, 'Min 0')
      .max(10000000, 'Max 10 million'),
  });
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      category: transaction.category,
      sum: transaction.sum,
    },
    validationSchema,
    onSubmit: values => {
      onSubmitBtnClick(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit} className={classes}>
      <div className="field is-relative pb-2">
        <label className="label" htmlFor="category">
          Category
        </label>
        <CategorySelect
          id="category"
          name="category"
          categories={categories}
          value={values.category}
          handleChange={handleChange}
          mainColor={mainColor}
        />
        <p className="help is-absolute has-text-grey-lighter">
          {errors.category}
        </p>
      </div>
      <div className="field is-relative pb-2">
        <label htmlFor="sum" className="label">
          Sum{' '}
        </label>
        <input
          id="sum"
          className={`input is-${mainColor}`}
          type="number"
          name="sum"
          value={values.sum}
          onChange={handleChange}
        />
        <p className="help is-absolute has-text-grey-lighter">{errors.sum}</p>
      </div>
      <button
        type="submit"
        className={`button is-${mainColor} is-light is-fullwidth mt-5`}
      >
        {btnText}
      </button>
    </form>
  );
};

export default TransactionForm;
