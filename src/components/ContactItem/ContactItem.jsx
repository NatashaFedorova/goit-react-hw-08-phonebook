import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, About, BtnDelete } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;
  return (
    <>
      <Item key={id}>
        <About>
          {name}: {phone}
        </About>
        <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </BtnDelete>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
