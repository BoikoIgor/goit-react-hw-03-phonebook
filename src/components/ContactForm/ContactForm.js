// import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
const INITIAL_STATE = { name: '', number: '' };
export class ContactForm extends Component {
  state = INITIAL_STATE;
  nameInputId = nanoid(10);
  numberInputId = nanoid(5);
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(this.state);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label
          htmlFor={this.nameInputId}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          Name
          <input
            style={{ width: '30%' }}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label
          htmlFor={this.numberInputId}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1.5rem',
            gap: '0.5rem',
          }}
        >
          Number
          <input
            style={{ width: '30%' }}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" style={{ marginTop: '1.5rem' }}>
          Add contact
        </button>
      </form>
    );
  }
}
