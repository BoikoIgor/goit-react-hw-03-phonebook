import PropTypes from 'prop-types';
export const ContactList = ({ contacts }) => {
  return (
    // <List style={{ display: 'flex', gap: 8 }}>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};
