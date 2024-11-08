import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import tabs from './configs';
import styles from './index.module.scss';
import { Position } from '@/types'; // Import Position type

const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const position = searchParams.get('position') || 'all';

  const handleButtonClick = useCallback(
    (buttonType: Position) => {
      // Use Position type
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set('position', buttonType.toLowerCase());
      setSearchParams(currentParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <nav className={styles['navigation']}>
      <div className={styles['container']}>
        <ul className={styles['navigation__list']}>
          {tabs.map(({ label, position }, index) => (
            <li
              key={index}
              className={`${styles['navigation__item']} ${
                position === (searchParams.get('position') || 'all')
                  ? styles['navigation__item_active']
                  : ''
              }`}
              onClick={() => handleButtonClick(position)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
