import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import FormNewContact from 'components/FormNewContact';
import Modal from 'components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operation';
import { Main, StyledBtn, Box } from './ContactsPage.styled';

const ContactsPage = () => {
  const [isModalOpen, seIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Main>
        <Box>
          <Filter />
          <StyledBtn type="button" onClick={() => seIsModalOpen(true)}>
            Add new contact
          </StyledBtn>
        </Box>
        <ContactList />
      </Main>

      {isModalOpen && (
        <Modal onClose={seIsModalOpen}>
          <FormNewContact onClose={seIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default ContactsPage;
