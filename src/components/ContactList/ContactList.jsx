import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibilityContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibilityContacts);

  return (
    <List>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
