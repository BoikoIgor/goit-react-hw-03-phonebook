import PropTypes from 'prop-types';
export const Filter = ({ filter, onChangeInput }) => {
  return (
    <>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          width: '50%',
        }}
      >
        Find contacts by name
        <input
          style={{ display: 'flex', marginBottom: '0.8rem', width: '40%' }}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
