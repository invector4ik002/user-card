import { combineReducers } from "redux";

import { navbarReducer } from "./navbarReducer";
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  usersReducer: usersReducer,
  navbarReducer: navbarReducer,
});