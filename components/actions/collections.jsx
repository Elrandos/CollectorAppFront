import axios from 'axios';
import {HOST} from './allowedhost.jsx';

// import { returnErrors } from "./messages";
import {COLLECTION_ACTIONS} from './types';
import {tokenConfig, tokenConfigWithForm} from './auth.jsx';
import store from '../store.jsx';
export const getCollection = () => (dispatch, getState) => {
  //   dispatch({type: USER_LOADING});
  // console.log(tokenConfig)
  // const accessToken = getState().auth.accessToken;
  // console.log(accessToken)
  console.log("kolekcja 1")
  axios
    .get(`${HOST}/Collection/GetAll`, tokenConfig(getState))
    .then(res => {
      console.log("kolekcja 2")

      dispatch({
        type: COLLECTION_ACTIONS.GET_COLLECTIONS,
        payload: res.data,
      });
    
    })
    .catch(err=>{
      console.log(err)
    }) 
};

export const addCollection = body => (dispatch, getState) => {
  //   dispatch({type: USER_LOADING});
  axios
    .post(
      `${HOST}/Collection/Add`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};

export const addItemCollection = body => (dispatch, getState) => {
  //   dispatch({type: USER_LOADING});
  axios
    .post(`${HOST}/CollectionItem/AddItem`, body, tokenConfigWithForm(getState))
    .then(() => {
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};

export const getCollectionDetail = id => (dispatch, getState) => {
  
  dispatch({
    type: COLLECTION_ACTIONS.GET_COLLECTION_DETAIL,
    payload: {id},
  });
};

export const getCollectionItemDetail = id => (dispatch, getState) => {
  
  dispatch({
    type: COLLECTION_ACTIONS.GET_COLLECTION_ITEM_DETAIL,
    payload: {id},
  });
};


//dddddddddddddddddddddd
export const deleteCollection = id => (dispatch, getState) => {
  console.log("usuwanie kolekcjii")
  axios
    .delete(
      `${HOST}/Collection/${id}`,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch({type: COLLECTION_ACTIONS.DELETE_COLLECTION}); // tylko pobranie na nowo
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};

export const deleteCollectionItem = id => (dispatch, getState) => {
  
  axios
    .delete(
      `${HOST}/CollectionItem/${id}`,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};

export const editCollection = body => (dispatch, getState) => {
  //   dispatch({type: USER_LOADING});
  axios
    .post(
      `${HOST}/Collection/Edit`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};

export const editCollectionItem = body => (dispatch, getState) => {
  //   dispatch({type: USER_LOADING});
  axios
    .post(
      `${HOST}/CollectionItem/Edit`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection()); // tylko pobranie na nowo
    })
    .catch(err => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      //   dispatch({
      //     type: AUTH_ERROR,
      //   });
    });
};