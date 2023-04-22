import PropTypes from 'prop-types';
export const ContactList = ({ contacts, delContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} style={{ marginBottom: '0.5rem' }}>
          {contact.name}:{' '}
          <span>
            <b>{contact.number}</b>
          </span>
          <button
            style={{ marginLeft: '0.7rem', fontSize: '0.7rem' }}
            type="button"
            onClick={() => {
              delContact(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ),
  delContact: PropTypes.func.isRequired,
};
