import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operation';
import { selectContactsList } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      <Filter />
      {contacts && <ContactList />}
    </>
  );
};

export default Contacts;
