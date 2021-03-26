import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {getCurrentTitleNavbar} from '../../redux/actions';

import '../Card/Card.css';

export const Posts = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const users = useSelector((state) => state.usersReducer.users);
  const idCard = useSelector((state) => state.usersReducer.idCard);

  if (location.pathname === '/posts') {
    dispatch(getCurrentTitleNavbar('Posts'))
  }

  console.log(users[idCard-1]);
  console.log('Posts = () => idCard = useSelector: ', idCard-1);
  return (
    <div className='card__content card__content--flex'> 
      <div  className='card__card-user card__card-user--flex-post'>
        <span>name: {users[idCard-1].name}</span>
        <span>username: {users[idCard-1].username}</span>
        <span>phone: {users[idCard-1].phone}</span>
        <span>email: {users[idCard-1].email}</span>
        <span>website: {users[idCard-1].website}</span>
      </div>
    </div>
    
  )
}