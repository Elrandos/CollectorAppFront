import {COLLECTION_ACTIONS} from '../actions/types';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { AsyncStorage } from "react-native";
// const sotre = await SecureStore.getItemAsync("token");
const initialState = {
  collectionList: [],
  collectionDetail: null,
  collectionItemDetail: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COLLECTION_ACTIONS.GET_COLLECTIONS:
      console.log(action.payload)

      return {
        ...state,
        collectionList: action.payload,
      };
    case COLLECTION_ACTIONS.GET_COLLECTION_DETAIL:
      const { id } = action.payload
      // const collectionCollection = state.collectionList.find(element => element.id == id)
      // console.log("collection")
      // console.log(collection)
      return { 
        ...state,
        collectionDetail: id,
      };

    case COLLECTION_ACTIONS.GET_COLLECTION_ITEM_DETAIL:
      const idItem = action.payload.id
      // const collectionCollectionItem = state.collectionList.find(element => element.id == idItem)
      return {
        ...state,
        collectionItemDetail: idItem,
      };

    case COLLECTION_ACTIONS.DELETE_COLLECTION:
      return {
        ...state,
        collectionDetail: null,
      };
    case COLLECTION_ACTIONS.DELETE_COLLECTION_ITEM:
      return {
        ...state,
        collectionItemDetail: null,
      };
    case COLLECTION_ACTIONS.CLEAR:
      return{
        collectionList: [],
        collectionDetail: null,
        collectionItemDetail: null,
        isLoading: false,
      }
    default:
      return state;
  }
}
