import PropTypes from 'prop-types';
import {
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';

export default function Filter({ filter, onChange }) {
  return (
    <Label>
      {' '}
      Find contact by name{' '}
      <Input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
        required
      />
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
