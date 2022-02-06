import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  inputChangeHandle = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  delButtonClickHandle = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));

  filteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  componentDidMount() {
    const savedContact = JSON.parse(localStorage.getItem('contacts'));
    if (savedContact) {
      this.setState({ contacts: savedContact });
    }
  }

  render() {
    return (
      <>
        <Section>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          {this.state.contacts.length < 1 ? (
            <Notification message="There is no contact yet." />
          ) : (
            <>
              <Filter
                value={this.state.filter}
                onChange={this.inputChangeHandle}
              />
              <ContactList
                contacts={this.filteredContacts()}
                onClick={this.delButtonClickHandle}
              />
            </>
          )}
        </Section>
      </>
    );
  }
}
