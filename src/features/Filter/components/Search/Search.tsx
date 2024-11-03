import SegmentIcon from '@mui/icons-material/Segment';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search.scss';

interface SearchProps {
  onBurgerMenuClick: () => void;
  onSearchChange?: (searchTerm: string) => void;
  isSortOpen: boolean;
}

const Search: React.FC<SearchProps> = ({ onBurgerMenuClick, onSearchChange, isSortOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>(() => {
    const params = new URLSearchParams(location.search);
    return params.get('search') || '';
  });

  useEffect(() => {
    if (onSearchChange) {
      onSearchChange(searchTerm);
    }
  }, [searchTerm, onSearchChange]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchTerm(value);

      const params = new URLSearchParams(location.search);
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      navigate({ search: params.toString() }, { replace: true });
    },
    [location.search, navigate]
  );

  const clearInput = useCallback(() => {
    setSearchTerm('');

    const params = new URLSearchParams(location.search);
    params.delete('search');
    navigate({ search: params.toString() }, { replace: true });
  }, [location.search, navigate]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }, []);

  return (
    <div className="search">
      <div className="container search__container">
        <form className="search__form">
          <input
            className="search__input"
            type="search"
            placeholder="Enter name, tag, email..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />

          {searchTerm.length <= 0 && (
            <button type="button" className="search__burger-menu" onClick={onBurgerMenuClick}>
              <SegmentIcon
                className={`search__burger-menu-icon ${
                  isSortOpen ? 'search__burger-menu-icon_open' : ''
                }`}
              />
            </button>
          )}
        </form>
        {searchTerm && (
          <button type="button" className="search__clear" onClick={clearInput}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
