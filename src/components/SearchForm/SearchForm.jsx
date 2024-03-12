import css from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    onSearch(form.elements.text.value);
    form.reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input className={css.moviesInput} type="text" name="text" />
      <button className={css.moviesButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
