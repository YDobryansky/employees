import '@employeesListComponents/skeleton/index.module.scss';
import styles from './index.module.scss';

const SkeletonEmployeeInfo = () => {
  return (
    <div className={styles['skeleton-employee-info']}>
      <div
        className={`${styles['skeleton-employee-info__img']} skeleton_animation`}
        aria-label="Loading avatar"
      ></div>
      <div
        className={`${styles['skeleton-employee-info__name']} skeleton_animation`}
        aria-label="Loading name"
      ></div>
      <div
        className={`${styles['skeleton-employee-info__position']} skeleton_animation`}
        aria-label="Loading position"
      ></div>
      <div
        className={`${styles['skeleton-employee-info__age']} skeleton_animation`}
        aria-label="Loading age"
      ></div>
      <div
        className={`${styles['skeleton-employee-info__phone']} skeleton_animation`}
        aria-label="Loading phone"
      ></div>
    </div>
  );
};

export default SkeletonEmployeeInfo;
