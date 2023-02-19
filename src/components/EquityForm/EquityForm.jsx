import { useFormik } from 'formik';
import * as yup from 'yup';
import CategorySelect from 'components/CategorySelect/CategorySelect';

const AddEquityForm = ({
  categories,
  onSubmitBtnClick,
  mainColor,
  classes = '',
  equity = {
    code: '',
    quantity: '',
    price: '',
  },
  toUpdate,
}) => {
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
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      code: equity.code,
      quantity: equity.quantity,
      price: equity.price,
    },
    validationSchema,
    onSubmit: values => {
      onSubmitBtnClick(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit} className={classes}>
      <div className="field is-relative pb-2 mb-1">
        <label className="label">Category</label>
        <CategorySelect
          name="code"
          categories={categories}
          value={values.code}
          handleChange={handleChange}
          mainColor={mainColor}
          toUpdate={toUpdate}
        />
        <p className="help is-absolute has-text-grey-lighter">{errors.code}</p>
      </div>
      <div className="is-flex is-fullwidth is-justify-content-space-between">
        <div className="field is-relative pb-2 mb-1 mr-2 is-flex-grow-1">
          <label className="label" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            className={`input is-${mainColor}`}
            type="number"
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
          />
          <p className="help is-absolute has-text-grey-lighter">
            {errors.quantity}
          </p>
        </div>
        <div className="field is-relative pb-2 mb-1 is-flex-grow-1">
          <label className="label" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            className={`input is-${mainColor}`}
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          <p className="help is-absolute has-text-grey-lighter">
            {errors.price}
          </p>
        </div>
      </div>
      <button
        type="submit"
        className={`button is-${mainColor} is-light is-fullwidth mt-5`}
      >
        Add equity
      </button>
    </form>
  );
};

export default AddEquityForm;
