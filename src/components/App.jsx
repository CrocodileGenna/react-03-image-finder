import { Component } from 'react';
import PropTypes from 'prop-types';
import { ItForm } from './phonebook/Form';
import { ListContacts } from './phonebook/ListContacts';
import { Search } from './phonebook/Search';
import { nanoid } from 'nanoid';

import { GlobalStyle, LIST_DIV } from './App.styled';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = value => {
    const { contacts } = this.state;
    value.id = nanoid();
    contacts.some(contact => contact.name === value.name)
      ? Notiflix.Notify.warning(
          "I'm sorry, but a contact with that name is already in the library"
        )
      : this.setState({ [contacts]: contacts.push(value) });
  };

  handleName = e => {
    // console.log(e.target.value);
    this.setState(prevState => ({
      ...prevState,
      filter: e.target.value,
    }));
  };

  removeContact = currentId => {
    this.setState(prevState => ({
      ...prevState,
      contacts: this.state.contacts.filter(({ id }) => id !== currentId),
    }));
  };

  searchContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(contact => contact.name.includes(filter));
    }
    return contacts;
  };

  render() {
    // const { contacts } = this.state;
    return (
      <GlobalStyle>
        <ItForm submit={this.submitHandler} />
        <LIST_DIV>
          <Search search={this.handleName} />
          <ListContacts
            list={this.searchContacts()}
            remove={this.removeContact}
          />
        </LIST_DIV>
      </GlobalStyle>
    );
  }
}

ItForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
Search.propTypes = {
  search: PropTypes.func.isRequired,
};
ListContacts.propTypes = {
  list: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};
