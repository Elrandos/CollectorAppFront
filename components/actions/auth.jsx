import axios from 'axios';
import {HOST} from './allowedhost.jsx';
// import { returnErrors } from "./messages";
import {
  AUTH_ACTIONS,
  COLLECTION_ACTIONS,
  ERRORS
} from './types';
import {jwtDecode} from 'jwt-decode';
import store from '../store.jsx';
import { getCollection } from './collections.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const loadUser = () => (dispatch, getState) => {
//   dispatch({type: AUTH_ACTIONS.USER_LOADING});
//   axios
//     .get(`${HOST}/Authorize/me/`, tokenConfig(getState))
//     .then(res => {
//       dispatch({
//         type: AUTH_ACTIONS.USER_LOADED,
//         payload: res.data,
//       });
//     })
//     .catch(err => {
//       // dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: AUTH_ACTIONS.AUTH_ERROR,
//       });
//     });
// };


export const loadUser2 = () => async dispatch => {
  dispatch({ type: AUTH_ACTIONS.USER_LOADING });

  try {
    const token = await AsyncStorage.getItem('accessToken');

    if (token) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCES,
        payload: { accessToken: token },
      });
    } else {
      dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
    }
  } catch (error) {
    console.error("Token load failed", error);
    dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
  }
};

export const login = (login, password) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const body = JSON.stringify({ login, password });

  axios
    .post(`${HOST}/Connect/Token`, body, config)
    .then(res => {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCES,
        payload: res.data,
      });
    })
    .catch(err => {
      const innerCode = err?.response?.data?.innerCode;
      const fallbackMessage = err?.response?.data?.message || 'Błąd logowania.';
      const message = ERRORS[innerCode] || fallbackMessage;

      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAIL,
        payload: { message },
      });
    });
};

export const register = (email, login, password) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const body = JSON.stringify({ email, login, password });

  axios
    .post(`${HOST}/User/Register`, body, config)
    .then(res => {
      dispatch({
        type: AUTH_ACTIONS.REGISTER_SUCCES,
        payload: res.data,
      });
    })
    .catch(err => {
      const innerCode = err?.response?.data?.innerCode;
      const fallbackMessage = err?.response?.data?.message || 'Błąd rejestracji.';
      const message = ERRORS[innerCode] || fallbackMessage;

      dispatch({
        type: AUTH_ACTIONS.REGISTER_FAIL,
        payload: { message },
      });
    });
};

export const Logout = () => dispatch => {
  dispatch({ type: AUTH_ACTIONS.LOGOUT_SUCCES });
  dispatch({ type: COLLECTION_ACTIONS.CLEAR });
};

export const tokenConfig = getState => {
  const accessToken = getState().auth.accessToken;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

export const tokenConfigWithForm = getState => {
  const accessToken = getState().auth.accessToken;

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};