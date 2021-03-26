import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentID } from '../../redux/actions';
import { CreatorCard } from '../CreateCard/CreateCard';
import { Link } from 'react-router-dom';

import './Card.css';

export const Card = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer.users);

  const [openEditorCard, setOpenEditorCard] = React.useState(false);

  const handlerEditorCard = (event) => {
    dispatch(getCurrentID(Number(event.target.id)))
    setOpenEditorCard(true);
  }
  const handlerPostOverview = (event) => {
    dispatch(getCurrentID(Number(event.target.id)))
  }
  
  return (
    <>
      {users.map((item) => (
        <div 
          name='card'
          className='card__card-user card__card-user--flex'
          key={item.id}
          id={item.id}
        >
          <span className=''>{item.id}</span>
          <span className=''>{item.username}</span>
          <span className=''>{item.email}</span>
          <button 
            id={item.id}
            onClick={handlerEditorCard}
            className='card-nav__btn'
          >Editor card
          </button>
            <Link 
              id={item.id}
              onClick={handlerPostOverview}
              className='card-nav__btn'
              to='/posts'>Post overview
            </Link>
        </div>
        ))
      }
      {openEditorCard && <CreatorCard name='editorCard' setOpenEditorCard={setOpenEditorCard}/>}
    </>
  )
}