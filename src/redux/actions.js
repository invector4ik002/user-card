import { POST_CARD_USERS, POST_PUT_CARD_USERS, GET_CURRENT_ID, CURRENT_TITLE_NAVBAR } from "./types";

export function usersGetCard(card) {
  return {
    type: POST_CARD_USERS,
    payload: card
  }
}
export function userPostCard(users, post, idCard) {
  return {
    type: POST_PUT_CARD_USERS,
    users: users,
    post: post,
    idCard: idCard,
  }
}
export function getCurrentID (idCard) {
  return {
    type: GET_CURRENT_ID,
    payload: idCard
  }
}
export function getCurrentTitleNavbar (title) {
  return {
    type: CURRENT_TITLE_NAVBAR,
    payload: title,
  }
}