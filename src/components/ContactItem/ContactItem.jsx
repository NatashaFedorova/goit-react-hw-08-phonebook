import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeContact, deleteContact } from 'redux/contacts/operation';

import { Item, About, BtnDelete } from './ContactItem.styled';

const Modal = ({ onClick, contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { ...contact, number: e.target.elements.phone.value };
    dispatch(changeContact(newContact));
    e.target.reset();
    onClick(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="phone" />
        <button type="submit">Submit-change</button>
      </form>
      <button type="button" onClick={() => onClick(false)}>
        Close
      </button>
    </div>
  );
};

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
        <div style={{ display: 'flex', gap: '20px' }}>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            Change
          </button>
          <a href={`tel:${number}`}>Call</a>
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDelete>
        </div>
      </Item>
      {isModalOpen && <Modal onClick={setIsModalOpen} contact={contact} />}
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
