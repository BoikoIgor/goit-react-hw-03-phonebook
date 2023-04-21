import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };
  formSubmitHandler = ({ name, number }) => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      };
    });
  };
  render() {
    // const { value } = this.state.name;
    return (
      <Layout>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            // value={this.state.name}
            // onChange={this.handleChange}
            onSubmit={this.formSubmitHandler}
          />

          <h2>Contacts</h2>
          {/* <Filter ... /> */}
          <ContactList contacts={this.state.contacts} />
        </div>
        <GlobalStyle />
      </Layout>
    );
  }
}
