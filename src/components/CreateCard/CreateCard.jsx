import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userPostCard } from '../../redux/actions';
import axios from 'axios';

import './CreateCard.css';

export const CreatorCard = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer.users);
  const idCard = useSelector((state) => state.usersReducer.idCard);

  const [post, setPost] = React.useState({
    name: '',
    email: '',
    id: props.name === 'postCard' ? users.length + 1: idCard
  });

const changeHandler = (event) => {
  setPost({...post, [event.target.name]: event.target.value})
}

const handlerPostCardUser = () => {
  if(props.name === 'postCard') {
  axios.post(`https://jsonplaceholder.typicode.com/users`, { ...post })
    .then(res => {
      setPost(res.data);
      dispatch(userPostCard(users, post, users.length + 1))
    })
    .catch( (error) => {
      console.log('error :>> ', error);
    })
    props.setOpenCreatorCard(false);
  }

  if(props.name === 'editorCard') {
    axios.put(`https://jsonplaceholder.typicode.com/users/${idCard}`, { ...post })
    .then(res => {
      setPost(res.data);
      dispatch(userPostCard(users, post, idCard-1))
    })
    .catch( (error) => {
      console.log('error :>> ', error);
    })
    props.setOpenEditorCard(false);
  }
};

const handlerClosed = () => {
  if(props.name === 'editorCard') {
    props.setOpenEditorCard(false)
  }
  if(props.name === 'postCard') {
    props.setOpenCreatorCard(false)
  }
};

  return (
    <div>
      {<div className="card__modal-creator-users">
        <div>CreatorCard
          <input
            placeholder='Ввидите names'
            // value={post.name}
            type='text'
            id='username'
            name='username'
            className='card__modal-creator-input'
            onChange={changeHandler}
          />
          <input
            // value={post.email}
            placeholder='Ввидите email'
            id='email'
            type='email'
            name='email'
            className='card__modal-creator-input'
            onChange={changeHandler}
          />
        </div>
          <button onClick={handlerPostCardUser} className='card__modal-creator-users-btn'>Сохранить</button>
        <div 
          onClick={handlerClosed}
          className='card__modal-creator-closed'
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#626262"/>
          </svg>
        </div>
      </div>}

      <div className='modal-overlay'> 
      </div>

    </div>
  )
}