import { useState } from 'react'
import styles from '../../../styles/Home.module.css';

interface Props {
  currentQuery: string,
  onSearch: (query: string) => void,
}

const SearchSection: React.FC<Props> = ({ currentQuery, onSearch }) => {
  const [query, setQuery] = useState(currentQuery);

  const handleClick = () => {
    onSearch(query);
  }

  return (
    <div className={styles.spaceAbove}>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='Search for items'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchSection;