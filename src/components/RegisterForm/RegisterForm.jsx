import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  StyledForm,
  Label,
  StyledInput,
  StyledBtn,
  Error,
} from './RegisterForm.styled';

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
    dispatch(register(value));
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
          Name
          <StyledInput type="text" name="name" />
          <ErrorMessage name="name">{msg => <Error>{msg}</Error>}</ErrorMessage>
        </Label>

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
            {() => (
              <Error>
                {
                  'The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number'
                }
              </Error>
            )}
          </ErrorMessage>
        </Label>

        <StyledBtn type="submit">Registration</StyledBtn>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
