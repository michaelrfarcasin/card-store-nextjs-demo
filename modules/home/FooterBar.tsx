import Currency from './footer/Currency';
import CheckoutButton from './footer/CheckoutButton';
import styles from '../../styles/Home.module.css';

const FooterBar = () => {
  return (
    <div className={[styles.container, styles.footerSection].join(' ')}>
      <div className={styles.spaceChildren}>
        <div>
          <h2>Currency</h2>
          <Currency />
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default FooterBar;