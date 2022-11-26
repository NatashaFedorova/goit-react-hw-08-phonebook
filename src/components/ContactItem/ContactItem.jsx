import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

import {
  Item,
  Box,
  About,
  Delete,
  Call,
  Change,
  IconCall,
  IconDelete,
  IconChange,
} from './ContactItem.styled';
import Modal from 'components/Modal';
import FormChangeContact from 'components/FormChangeContact';

const ContactItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <>
      <Item key={id}>
        <About>
          {name}: {number}
        </About>
        <Box style={{ display: 'flex', gap: '20px' }}>
          <Call href={`tel:${number}`} title="Call">
            <IconCall />
          </Call>
          <Change
            type="button"
            onClick={() => setIsModalOpen(true)}
            title="Change phone number"
          >
            <IconChange />
          </Change>
          <Delete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            title="Delete contact"
          >
            <IconDelete />
          </Delete>
        </Box>
        {isModalOpen && (
          <Modal onClose={setIsModalOpen}>
            {<FormChangeContact onClose={setIsModalOpen} contact={contact} />}
          </Modal>
        )}
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
