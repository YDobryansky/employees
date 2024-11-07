import { setSortPosition } from '@/common/redux/employeesSlice';
import { RootState } from '@/common/redux/store';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import tabs from './configs';
import styles from './index.module.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeButton = useSelector((state: RootState) => state.employees.sortPosition);
  const position = searchParams.get('position') || 'all';

  useEffect(() => {
    if (position) {
      dispatch(setSortPosition(position as any));
    }
  }, [position, dispatch]);

  const handleButtonClick = useCallback(
    (buttonType: 'all' | 'designer' | 'analyst' | 'manager' | 'android' | 'ios') => {
      dispatch(setSortPosition(buttonType));

      const currentParams = new URLSearchParams(searchParams.toString());

      currentParams.set('position', buttonType.toLowerCase());

      setSearchParams(currentParams);
    },
    [dispatch, searchParams, setSearchParams]
  );

  return (
    <nav className={styles['navigation']}>
      <div className={styles['container']}>
        <ul className={styles['navigation__list']}>
          {tabs.map(({ label, position }, index) => (
            <li
              key={index}
              className={`${styles['navigation__item']} ${
                activeButton === position ? styles['navigation__item_active'] : ''
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
