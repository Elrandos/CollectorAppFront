//AUTHORIZE

export const AUTH_ACTIONS = Object.freeze({
  REGISTER_SUCCES: 'REGISTER_SUCCES',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGIN_SUCCES: 'LOGIN_SUCCES',
  MUST_LOGIN: 'MUST_LOGIN',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT_SUCCES: 'LOGOUT_SUCCES',
  USER_LOADED: 'USER_LOADED',
  AUTH_ERROR: 'AUTH_ERROR',
  USER_LOADING: 'USER_LOADING',
  LOAD_OTHER_USER: 'LOAD_OTHER_USER',
  RETRIEVE_TOKEN: 'RETRIEVE_TOKEN',
});

//COLECTIONS
// export const GET_COLLECTIONS = 'GET_COLLECTIONS';
// export const ADD_COLLECTIONS = 'ADD_COLLECTIONS';
// export const ADD_ITEM_COLLECTION = 'ADD_ITEM_COLLECTION';



export const COLLECTION_ACTIONS = Object.freeze({
    GET_COLLECTIONS: 'GET_COLLECTIONS',
    ADD_COLLECTIONS: 'ADD_COLLECTIONS',
    ADD_ITEM_COLLECTION: 'ADD_ITEM_COLLECTION',
    GET_COLLECTION_DETAIL: "GET_COLLECTION_DETAIL",
    GET_COLLECTION_ITEM_DETAIL: "GET_COLLECTION_ITEM_DETAIL",
    DELETE_COLLECTION: "DELETE_COLLECTION",
    DELETE_COLLECTION_ITEM: "DELETE_COLLECTION_ITEM",
    CLEAR: "CLEAR"

});



export const ERRORS = Object.freeze({
  1000: 'Nie znaleziono użytkownika.',
  1001: 'Błąd autoryzacji użytkownika.',
  1002: 'Email lub hasło są niepoprawne.',
  1003: 'Błąd przy dodawaniu żądania.',
  1004: 'Użytkownik już istnieje.',
  1005: 'Błąd rejestracji.',
  1006: 'Email już jest zajęty.',
  2000: 'Nieprawidłowe dane wejściowe.',
  2001: 'Brak uprawnień.',
  2002: 'Kolekcja już istnieje.',
  2003: 'Nie znaleziono kolekcji.',
  2004: 'Nie znaleziono elementu kolekcji.',
  3001: 'Nie znaleziono pliku.',
});