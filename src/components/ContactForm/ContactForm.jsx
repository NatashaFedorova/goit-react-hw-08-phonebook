import PropTypes from 'prop-types';
import * as yup from 'yup';
import 'yup-phone';
import { Formik, ErrorMessage } from 'formik';
import { DataForm, Input, Label, BtnSubmit, Error } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  phone: '+',
};

const nameCheck = (contacts, value) => {
  return contacts.find(
    ({ name }) => value.toLowerCase() === name.toLowerCase()
  );
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = (value, { resetForm }) => {
    const nameCheckResult = nameCheck(contacts, value.name);
    if (nameCheckResult) {
      alert(`${value.name} is already in contact`);
      return;
    }
    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <DataForm autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component={Error} />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses"
            required
          />
          <ErrorMessage name="phone" component={Error} />
        </Label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </DataForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
