import React from 'react';
import { CreatorCard } from '../CreateCard/CreateCard';
import { useSelector } from 'react-redux';

import './Navbar.css';

export const Navbar = () => {

  const [openCreatorCard, setOpenCreatorCard] = React.useState(false);
  const currentTitleNavbar = useSelector((state) => state.navbarReducer.titleNavbar);
  
  const handlerOpen = () => {
    setOpenCreatorCard(true);
  }
  return (
    <>
      <div className='card-nav card-nav--flex'>
        <div>
          <h1 className='card-nav__heading'>{currentTitleNavbar}</h1>
        </div>
        <div>
          <button 
            className='card-nav__btn'
            onClick={handlerOpen}
          >create users
          </button>
        </div>
      </div>
    {openCreatorCard && <CreatorCard name='postCard' setOpenCreatorCard={setOpenCreatorCard}/>}
    </>
  );
}