import CloseIcon from '@mui/icons-material/Close';
import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './index.module.scss';

type SortCriteria = 'alphabet' | 'birthday';

interface SortEmployeesProps {
  onClose: () => void;
  isSortOpen: boolean;
}

const SortEmployees: React.FC<SortEmployeesProps> = ({ onClose, isSortOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeButton = (searchParams.get('sort') as SortCriteria) || 'alphabet';

  const handleButtonClick = useCallback(
    (buttonType: SortCriteria) => {
      if (activeButton === buttonType) return;

      const newParams = new URLSearchParams(searchParams);
      newParams.set('sort', buttonType);
      setSearchParams(newParams);
    },
    [activeButton, searchParams, setSearchParams]
  );

  return (
    <div className={styles['sort-wrapper']}>
      {isSortOpen && <div className={styles['overlay']} onClick={onClose} />}
      <div className={`${styles['sort-block']} ${isSortOpen ? styles['sort-block_active'] : ''}`}>
        <div className={styles['sort-block__header']}>
          <button className={styles['sort-block__close-btn']} onClick={onClose}>
            <span className={styles['sort-block__close-icon']}>
              <CloseIcon />
            </span>
          </button>
          <h4 className={styles['sort-block__title']}>Sorting</h4>
        </div>
        <div className={styles['sort-block__content']}>
          <div
            className={styles['sort-block__wrapper']}
            onClick={() => handleButtonClick('alphabet')}
          >
            <button
              className={`${styles['sort-block__button']} ${
                activeButton === 'alphabet' ? styles['sort-block__button_active'] : ''
              }`}
            />
            <p className={styles['sort-block__description']}>Alphabetically</p>
          </div>
          <div
            className={styles['sort-block__wrapper']}
            onClick={() => handleButtonClick('birthday')}
          >
            <button
              className={`${styles['sort-block__button']} ${
                activeButton === 'birthday' ? styles['sort-block__button_active'] : ''
              }`}
            />
            <p className={styles['sort-block__description']}>By birthday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortEmployees;
