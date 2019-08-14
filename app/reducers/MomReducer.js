import {
  MOMS_FETCH_SUCCESS,
  ADD_MOM_TO_LIST,
  MOM_LIST_REFRESHING
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  listInitialized: false,
  listLoading: true,
  listRefreshing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOMS_FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        listInitialized: true,
        listLoading: false,
        listRefreshing: false
      };
    case ADD_MOM_TO_LIST:
      const list = getNewList(state.list, action.payload);
      return {
        ...state,
        list: list
      };
    case MOM_LIST_REFRESHING:
      return {
        ...state,
        listRefreshing: true
      };
    default:
      return state;
  }
};

const getNewList = (list, newMom) => {
  let added = false;
  for (const [index, mom] of list.entries()) {
    if (mom.id == newMom.id) {
      added = true;
      list[index] = newMom;
      break;
    }
  }
  if (!added) {
    list.push(newMom);
  }
  return list;
};
