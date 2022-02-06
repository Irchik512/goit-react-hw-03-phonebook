import PropTypes from 'prop-types';
import { Contacts } from 'components/ContactList/ContactsListItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export default function ContactsListItem({ name, number, onClick }) {
  return (
    <Contacts>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Contacts>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
