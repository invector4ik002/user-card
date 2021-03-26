import { POST_CARD_USERS, POST_PUT_CARD_USERS, GET_CURRENT_ID } from './types';

const initialState = {
  users: [],
  idCard: null
};

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_CARD_USERS:
      return {
        ...state, 
        users: [...state.users, ...action.payload]
      }
    case POST_PUT_CARD_USERS:
      return {
        ...state, 
        users: [
        ...action.users.slice(0, action.idCard), 
        action.post, 
        ...action.users.slice(action.idCard+1)]
    }
    case GET_CURRENT_ID: 
      return {
        ...state,
        idCard: action.payload
      }
    default: return state
  }
};