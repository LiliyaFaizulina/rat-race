import { useFormik } from 'formik';
import * as yup from 'yup';
import { RxCheck } from 'react-icons/rx';

const UpdateGamerForm = ({
  fieldName,
  fieldType,
  fieldValue,
  onSubmitBtnClick,
  mainColor,
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
      className={`columns column is-mobile is-two-third p-0 m-0 has-background-${mainColor}-light`}
    >
      <label className="column is-auto pt-0 pb-2 px-1 is-relative">
        {fieldName === 'note' ? (
          <textarea
            className="textarea is-primary"
            rows="2"
            name={fieldName}
            value={values[fieldName]}
            onChange={handleChange}
          >
            {values[fieldName]}
          </textarea>
        ) : (
          <input
            className="input is-primary"
            type={fieldType}
            name={fieldName}
            value={values[fieldName]}
            onChange={handleChange}
          />
        )}
        <p className="help is-absolute has-text-grey">{errors[fieldName]}</p>
      </label>
      <button
        type="submit"
        className={`column is-one-fifth button is-flex is-${mainColor} is-inverted has-background-${mainColor}-light`}
      >
        <RxCheck className="icon" />
      </button>
    </form>
  );
};

export default UpdateGamerForm;
