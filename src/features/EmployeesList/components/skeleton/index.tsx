import styles from './index.module.scss';

const Skeleton = () => {
  return (
    <ul className={styles['skeleton__list']}>
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className={styles['skeleton__item']}>
          <div
            className={`${styles['skeleton__img']} ${styles['skeleton-animation']}`}
            aria-label="Loading avatar"
          ></div>
          <div
            className={`${styles['skeleton__name']} ${styles['skeleton-animation']}`}
            aria-label="Loading name"
          >
            <div
              className={`${styles['skeleton__position']} ${styles['skeleton-animation']}`}
              aria-label="Loading position"
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
