import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Search from '../search/Search';
import SortEmployees from '../sort/SortEmployees';
import './header.scss';

const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('search') || '');

  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    if (currentSearch !== searchTerm) {
      setSearchTerm(currentSearch);
    }
  }, [searchParams]);

  const handleSearchChange = useCallback(
    (term: string) => {
      if (term === searchTerm) return;

      setSearchTerm(term);
      const newParams = new URLSearchParams(searchParams.toString());
      if (term) {
        newParams.set('search', term);
      } else {
        newParams.delete('search');
      }
      setSearchParams(newParams);
    },
    [searchTerm, setSearchParams]
  );

  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const handleBurgerMenuClick = useCallback(() => {
    setIsSortMenuOpen(prev => !prev);
  }, []);

  const handleCloseSort = useCallback(() => {
    setIsSortMenuOpen(false);
  }, []);

  return (
    <div className="header">
      <h1 className="header__title">Search</h1>
      <Search
        onBurgerMenuClick={handleBurgerMenuClick}
        onSearchChange={handleSearchChange}
        isSortOpen={isSortMenuOpen}
      />

      <SortEmployees onClose={handleCloseSort} isSortOpen={isSortMenuOpen} />

      <Navigation />
    </div>
  );
};

export default Header;
