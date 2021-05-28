/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { LegacyRef } from 'react';
import { Link, SkeletonSprite } from '../../helpers';
import NavLogo from './NavLogo';
import SearchBar from '../../search/searchBar/SearchBar';
import MenuButton from './MenuButton';
import NavLinks from './NavLinks';
import './universalNav.css';

export interface UniversalNavProps {
  displayMenu?: boolean;
  fetchState?: { pending: boolean };
  menuButtonRef?: LegacyRef<HTMLButtonElement> | undefined;
  searchBarRef?: unknown;
  toggleDisplayMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  user?: Record<string, unknown>;
}
export const UniversalNav: React.FC<UniversalNavProps> = ({
  displayMenu,
  toggleDisplayMenu,
  menuButtonRef,
  searchBarRef,
  user,
  fetchState
}) => {
  const { pending } = fetchState;
  return (
    <nav
      className={'universal-nav' + (displayMenu ? ' expand-nav' : '')}
      id='universal-nav'
    >
      <div
        className={
          'universal-nav-left' + (displayMenu ? ' display-search' : '')
        }
      >
        <SearchBar innerRef={searchBarRef} />
      </div>
      <div className='universal-nav-middle'>
        <Link id='universal-nav-logo' to='/learn'>
          <NavLogo />
          <span className='sr-only'>freeCodeCamp.org</span>
        </Link>
      </div>
      <div className='universal-nav-right main-nav'>
        {pending ? (
          <div className='nav-skeleton'>
            <SkeletonSprite />
          </div>
        ) : (
          <MenuButton
            displayMenu={displayMenu}
            innerRef={menuButtonRef}
            onClick={toggleDisplayMenu}
            user={user}
          />
        )}
      </div>

      <NavLinks
        displayMenu={displayMenu}
        fetchState={fetchState}
        toggleDisplayMenu={toggleDisplayMenu}
        user={user}
      />
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
