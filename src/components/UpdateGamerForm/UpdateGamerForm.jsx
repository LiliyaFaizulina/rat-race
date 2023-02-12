import { useFormik } from 'formik';
import * as yup from 'yup';

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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type={fieldType}
          name={fieldName}
          value={values[fieldName]}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateGamerForm;
