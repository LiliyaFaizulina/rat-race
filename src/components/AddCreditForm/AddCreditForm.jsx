import { useFormik } from 'formik';
import * as yup from 'yup';

const AddCreditForm = ({ onSubmitBtnClick, mainColor }) => {
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
      .required('Fee is required')
      .min(0, 'Min 0')
      .max(100000, 'Max 100k'),
  });
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
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
        <p className="help is-absolute has-text-grey-lighter">{errors.name}</p>
      </div>
      <div className="is-flex is-fullwidth is-justify-content-space-between">
        <div className="field is-relative pb-2 mb-1 mr-2 is-flex-grow-1">
          <label className="label" htmlFor="cost">
            Cost
          </label>
          <input
            id="cost"
            className={`input is-${mainColor}`}
            type="number"
            name="cost"
            value={values.cost}
            onChange={handleChange}
          />
          <p className="help is-absolute has-text-grey-lighter">
            {errors.cost}
          </p>
        </div>
        <div className="field is-relative pb-2 mb-1 is-flex-grow-1">
          <label className="label" htmlFor="monthlyFee">
            Monthly fee
          </label>
          <input
            id="monthlyFee"
            className={`input is-${mainColor}`}
            type="number"
            name="monthlyFee"
            value={values.monthlyFee}
            onChange={handleChange}
          />
          <p className="help is-absolute has-text-grey-lighter">
            {errors.monthlyFee}
          </p>
        </div>
      </div>
      <button
        type="submit"
        className={`button is-${mainColor} is-light is-fullwidth mt-5`}
      >
        Add credit
      </button>
    </form>
  );
};

export default AddCreditForm;
