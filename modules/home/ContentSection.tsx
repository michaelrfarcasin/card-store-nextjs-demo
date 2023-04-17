import { useState, useEffect } from 'react';
import SearchSection from './content/SearchSection';
import InventoryItem from './content/item/InventoryItem';
import Pagination from './content/Pagination';
import NameBar from './content/NameBar';
import styles from '../../styles/Home.module.css';
import { Item } from '../../common/types';
import { apiGet } from '../../common/apiGet';

const ContentSection = () => {
  const limit = 12;
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setOffset((currentPage-1) * limit);
  }, [currentPage]);

  let url = '/api/items?limit=' + limit + '&offset=' + offset;
  if (query !== '') {
    url += '&query=' + query;
  }
  const { data } = apiGet(url);
  if (data === undefined) return <div className={styles.contentSection}>Error loading page</div>;

  const pageCount = Math.ceil(data.total / data.perPage);

  const onPageChange = (page: number) => {
    if (page == 0) {
      setCurrentPage(Math.max(currentPage - 1, 1));
      return;
    }
    if (page == -1) {
      setCurrentPage(Math.min(currentPage + 1, pageCount));
      return;
    }
    setCurrentPage(page);
  }

  const inventoryItems = data.items.map((item: Item) => <InventoryItem key={item.productId} item={item} />);

  return (
    <div className={styles.contentSection}>
      <NameBar />
      <div className={styles.container}>
        <SearchSection currentQuery={query} onSearch={setQuery} />
        <div className={[styles.grid, styles.inventory].join(' ')}>
          {inventoryItems}
        </div>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ContentSection;