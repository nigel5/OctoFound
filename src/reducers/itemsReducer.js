import {
    FETCH_ALL_ITEMS_BEGIN,
    FETCH_ALL_ITEMS_SUCCESS,
    FETCH_ALL_ITEMS_FAILURE,
    ADD_ITEM_BEGIN,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    UPDATE_ITEM_BEGIN,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEM_BEGIN,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE
} from '../actions/index';

import {findKeyByProp1D} from '../util/tool';

const itemsReducer = (state = {}, action) => {
    let keyRes = [];
    switch (action.type) {
        case FETCH_ALL_ITEMS_BEGIN:
            return state;
        case FETCH_ALL_ITEMS_SUCCESS:
            return action.data;
        case FETCH_ALL_ITEMS_FAILURE:
            return state;
        case ADD_ITEM_BEGIN:
            return state;
        case ADD_ITEM_SUCCESS:
            return {
              ...state,
              [Object.keys(state).length]: action.data
            };
        case ADD_ITEM_FAILURE:
            return state;
        case UPDATE_ITEM_BEGIN:
            return state;
        case UPDATE_ITEM_SUCCESS:
            keyRes = findKeyByProp1D("_id", action.data._id, state);
            return {
              ...state,
              [keyRes[0]]: action.data
            };
        case UPDATE_ITEM_FAILURE:
            return state;
        case DELETE_ITEM_BEGIN:
            return state;
        case DELETE_ITEM_SUCCESS:
            keyRes = findKeyByProp1D("_id", action.data._id, state);
            let copy = Object.assign({}, state);
            delete copy[keyRes[0]];
            return copy;
        case DELETE_ITEM_FAILURE:
            return state;
        default:
            return state;
    }
};

export default itemsReducer;
