import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { FORM_DIV, INPUT, BUTTUN } from './styled/Form.styled';

export class ItForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Formik>
        <FORM_DIV onSubmit={this.submitForm} autoComplete="off">
          Phonebook
          <INPUT
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name"
            value={name}
            onChange={this.nameChenge}
            required
          />
          <INPUT
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number"
            value={number}
            onChange={this.nameChenge}
            required
          />
          <BUTTUN type="submit">Add contact</BUTTUN>
        </FORM_DIV>
      </Formik>
    );
  }
}

FORM_DIV.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

INPUT.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
