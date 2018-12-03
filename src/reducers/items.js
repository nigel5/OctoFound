import {
  FETCH_ALL_ITEMS_BEGIN,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_ALL_ITEMS_FAILURE
} from '../actions/index'
const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS_BEGIN:
      return state
    case FETCH_ALL_ITEMS_SUCCESS:
      return {
        ...state,
         items: action.data
       }
    case FETCH_ALL_ITEMS_FAILURE:
      return state
    default:
      return state
  }
}

export default items
