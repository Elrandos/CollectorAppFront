import axios from 'axios';
import {HOST} from './allowedhost.jsx';
import {COLLECTION_ACTIONS} from './types';
import {tokenConfig, tokenConfigWithForm} from './auth.jsx';
import store from '../store.jsx';

export const getCollection = () => (dispatch, getState) => {
  axios
    .get(`${HOST}/Collection/GetAll`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: COLLECTION_ACTIONS.GET_COLLECTIONS,
        payload: res.data,
      });
    })

};

export const addCollection = body => (dispatch, getState) => {
  axios
    .post(
      `${HOST}/Collection/Add`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection());
    })
};

export const addItemCollection = body => (dispatch, getState) => {
  axios
    .post(`${HOST}/CollectionItem/AddItem`, body, tokenConfigWithForm(getState))
    .then(() => {
      store.dispatch(getCollection()); 
    })
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


export const deleteCollection = id => (dispatch, getState) => {
  axios
    .delete(
      `${HOST}/Collection/${id}`,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch({type: COLLECTION_ACTIONS.DELETE_COLLECTION}); 
      store.dispatch(getCollection());
    })
   
};

export const deleteCollectionItem = id => (dispatch, getState) => {
  
  axios
    .delete(
      `${HOST}/CollectionItem/${id}`,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection());
    })
};

export const editCollection = body => (dispatch, getState) => {
  axios
    .post(
      `${HOST}/Collection/Edit`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection());
    })
};

export const editCollectionItem = body => (dispatch, getState) => {
  axios
    .post(
      `${HOST}/CollectionItem/Edit`,
      body,
      tokenConfigWithForm(getState),
    )
    .then(() => {
      store.dispatch(getCollection());
    })
};