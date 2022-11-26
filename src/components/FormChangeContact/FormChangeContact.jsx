import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/operation';

const FormChangeContact = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { ...contact, number: e.target.elements.phone.value };
    dispatch(changeContact(newContact));
    e.target.reset();
    onClose(false);
  };
  return (
    <div>
      <p></p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="phone" placeholder="new phone number" />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default FormChangeContact;
