import { useFormik } from 'formik';
import * as yup from 'yup';
import { RxCheck } from 'react-icons/rx';

const UpdateGamerForm = ({
  fieldName,
  fieldType,
  fieldValue,
  onSubmitBtnClick,
}) => {
  const validationSchema =
    fieldType === 'text'
      ? yup.object().shape({
          [fieldName]: yup.string().required(`${fieldName} is required`),
        })
      : yup.object().shape({
          [fieldName]: yup
            .number()
            .required(`${fieldName} is required`)
            .min(0, 'Min 0'),
        });

  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        [fieldName]: fieldValue,
      },
      validationSchema,
      onSubmit: values => {
        const isChange = values[fieldName] === fieldValue ? null : values;
        onSubmitBtnClick(isChange);
        resetForm();
      },
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="columns column is-mobile is-two-third p-0 m-0"
    >
      <label className="column is-8 p-0">
        <input
          className="input is-primary"
          type={fieldType}
          name={fieldName}
          value={values[fieldName]}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="button is-primary is-outlined is-flex column is-auto ml-2"
      >
        <RxCheck className="icon" />
      </button>
    </form>
  );
};

export default UpdateGamerForm;
