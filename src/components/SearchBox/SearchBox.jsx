import css from './SearchBox.module.css';

const SearchBox = ({ searchContact, onSearchChange }) => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.search}
        id="filter"
        type="text"
        value={searchContact}
        onChange={onSearchChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
