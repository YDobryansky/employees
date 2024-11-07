import styles from './index.module.scss';

const NotFoundEmployees = () => (
  <div className={styles['nobody-block']}>
    <img
      className={styles['nobody-block__img']}
      src="/images/magnifying-glass.png"
      alt="magnifying glass"
    />
    <h4 className={styles['nobody-block__title']}>We didn't find anyone</h4>
    <p className={styles['nobody-block__text']}>Try changing your request</p>
  </div>
);

export default NotFoundEmployees;
