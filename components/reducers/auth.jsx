import {
  AUTH_ACTIONS
} from '../actions/types';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { AsyncStorage } from "react-native";
// const sotre = await SecureStore.getItemAsync("token");
const initialState = {
  accessToken: null,
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null, // <-- dodane
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIONS.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null, // czyść błędy przy nowej akcji
      };

    case AUTH_ACTIONS.LOGIN_SUCCES:
    case AUTH_ACTIONS.REGISTER_SUCCES:
      AsyncStorage.setItem('accessToken', action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_FAIL:
    case AUTH_ACTIONS.REGISTER_FAIL:
    case AUTH_ACTIONS.AUTH_ERROR:
      AsyncStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload?.message || 'Wystąpił błąd uwierzytelniania.', // <-- obsługa errora
      };

    case AUTH_ACTIONS.LOGOUT_SUCCES:
      AsyncStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
}