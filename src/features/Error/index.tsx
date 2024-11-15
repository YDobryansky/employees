import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Error = () => (
  <div className={styles['failed']}>
    <img className={styles['failed__icon']} src="/images/error-icon.png" alt="ERROR" />
    <h5 className={styles['failed__title']}>Some unexpected error...</h5>
    <p className={styles['failed__description']}>Our team is fixing it now</p>
    <Link to="/" className={styles['failed__link']}>
      Try again
    </Link>
  </div>
);

export default Error;
