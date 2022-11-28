import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledForm,
  Label,
  StyledInput,
  StyledBtn,
  Error,
} from './LoginForm.styled';
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const schema = yup.object().shape({
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
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(logIn(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm autoComplete="off">
        <Label>
          Email
          <StyledInput
            type="email"
            name="email"
            title="Invalid email address"
          />
          <ErrorMessage name="email">
            {msg => <Error>{msg}</Error>}
          </ErrorMessage>
        </Label>
        <Label>
          Password
          <StyledInput
            type="password"
            name="password"
            title="The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number"
          />
          <ErrorMessage name="password">
            {msg => (
              <Error>
                {
                  'The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number'
                }
              </Error>
            )}
          </ErrorMessage>
        </Label>

        <StyledBtn type="submit">Log in</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
export default LoginForm;
