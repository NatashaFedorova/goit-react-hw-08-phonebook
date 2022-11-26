import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import 'yup-phone';
import { Formik, ErrorMessage } from 'formik';
import { changeContact } from 'redux/contacts/operation';
import {
  StyledForm,
  Input,
  Label,
  BtnSubmit,
  Error,
} from './FormChangeContact.styled';

const schema = yup.object().shape({
  number: yup.string().phone().required(),
});

const initialValues = {
  number: '+',
};

const FormChangeContact = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = ({ number }, { resetForm }) => {
    dispatch(changeContact({ ...contact, number }));
    resetForm();
    onClose(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label>
            Phone number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses"
              required
            />
            <ErrorMessage name="number" component={Error} />
          </Label>
          <BtnSubmit type="submit">Change</BtnSubmit>
        </StyledForm>
      </Formik>
    </>
  );
};

FormChangeContact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default FormChangeContact;
