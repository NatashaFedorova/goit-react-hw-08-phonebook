import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

import { Item, About, BtnDelete } from './ContactItem.styled';

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
      {isModalOpen && (
        <div>
          <p>Modal</p>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Close
          </button>
        </div>
      )}
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
