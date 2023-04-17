// Source: https://blog.logrocket.com/add-pagination-next-js-app/
import Image from 'next/image';
import styles from '../../../styles/Pagination.module.css';

interface Props {
  pageCount: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}

const Pagination: React.FC<Props> = ({ pageCount, currentPage, onPageChange }) => {
  if (pageCount === 1) return <></>;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <ul className={styles.pagination}>
      <li key='0' className={styles.pageItem}>
        <a className={styles.pageLink} onClick={() => onPageChange(0)}>
          <Image src='/leftArrow.png' width='32' height='32' alt='left arrow' />
        </a>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={
            page === currentPage ? styles.pageItemActive : styles.pageItem
          }
        >
          <a className={styles.pageLink} onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
      <li key='-1' className={styles.pageItem}>
        <a className={styles.pageLink} onClick={() => onPageChange(-1)}>
          <Image src='/rightArrow.png' width='32' height='32' alt='right arrow' />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;