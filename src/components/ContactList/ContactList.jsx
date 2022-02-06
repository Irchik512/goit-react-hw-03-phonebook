import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactList/ContactsListItem';
import { ContactsList } from 'components/ContactList/ContactsList.styled';

export default function ContactList({ contacts, onClick }) {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
          onClick={() => onClick(id)}
        />
      ))}
    </ContactsList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
