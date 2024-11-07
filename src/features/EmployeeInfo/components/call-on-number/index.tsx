import React from 'react';
import styles from './index.module.scss';

interface CallOnNumberProps {
  phoneNumber: string | undefined;
  cancel: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallOnNumber: React.FC<CallOnNumberProps> = ({ phoneNumber, cancel }) => {
  return (
    <div className={styles['call-container']}>
      <button
        className={`${styles['call-container__phone-number']} ${styles['call-container__btn']}`}
      >
        {phoneNumber ? phoneNumber : 'N/A'}
      </button>
      <button
        className={`${styles['call-container__cancel']} ${styles['call-container__btn']}`}
        onClick={() => cancel(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default CallOnNumber;
