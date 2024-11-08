import '@employeesListComponents/skeleton/index.module.scss';
import styles from './index.module.scss';

const SkeletonEmployeeInfo = () => (
  <div className={styles['skeleton-employee-info']}>
    <div
      className={`${styles['skeleton-employee-info__img']} skeleton_animation`}
      aria-label="Loading avatar"
    />
    <div
      className={`${styles['skeleton-employee-info__name']} skeleton_animation`}
      aria-label="Loading name"
    />
    <div
      className={`${styles['skeleton-employee-info__position']} skeleton_animation`}
      aria-label="Loading position"
    />
    <div
      className={`${styles['skeleton-employee-info__age']} skeleton_animation`}
      aria-label="Loading age"
    />
    <div
      className={`${styles['skeleton-employee-info__phone']} skeleton_animation`}
      aria-label="Loading phone"
    />
  </div>
);

export default SkeletonEmployeeInfo;
