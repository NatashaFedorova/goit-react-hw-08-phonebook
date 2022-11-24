import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup
    .string()
    .required()
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols()
    .min(8),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form
        // autoComplete="off"
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <Field type="text" name="name" style={{ color: 'white' }} />
        <ErrorMessage name="name" />
        <Field type="email" name="email" style={{ color: 'white' }} />
        <ErrorMessage name="email" />
        <Field type="password" name="password" style={{ color: 'white' }} />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
