import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

const NameBar = () => {
  return (
    <div className={[styles.spaceChildren, styles.nameBar].join(' ')}>
      <div className={styles.container}>
        <h1>Card store</h1>
      </div>
      <div className={[styles.container, styles.alignCenter].join(' ')}>
        <Image src='/mtg-logo.png' width='172' height='50' alt='Magic logo' aria-hidden='true' />
      </div>
    </div>
  );
};

export default NameBar;