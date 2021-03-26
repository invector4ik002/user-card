import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { usersGetCard } from '../../redux/actions';
import {getCurrentTitleNavbar} from '../../redux/actions';
import { Card } from '../Card/Card';

import './Content.css';

export const Content = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer.users);
  
   if (location.pathname === '/') {
    dispatch(getCurrentTitleNavbar('card-blok'))
  }

  React.useEffect(() => {

    if(users.length > 0) return

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (res) => {
      dispatch(usersGetCard(res.data));
    })
    .catch( (error) => {
      console.log('error :>> ', error);
    })
  },[])

  return (
    <div className='card__content card__content--flex'>
      <Card />
    </div>
  );
}