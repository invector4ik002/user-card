import { CURRENT_TITLE_NAVBAR } from './types';

const initialState = {
  titleNavbar: 'card-blok',
}

export const navbarReducer = (state = initialState, action) => {
  switch(action.type) {
    case CURRENT_TITLE_NAVBAR:
      return {
        ...state,
        titleNavbar: action.payload
      }
    default: return state
  }
};