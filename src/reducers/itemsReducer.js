import {
    FETCH_ALL_ITEMS_BEGIN,
    FETCH_ALL_ITEMS_SUCCESS,
    FETCH_ALL_ITEMS_FAILURE
} from '../actions/index';

const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_ITEMS_BEGIN:
            return state;
        case FETCH_ALL_ITEMS_SUCCESS:
            return action.data;
        case FETCH_ALL_ITEMS_FAILURE:
            return state;
        default:
            return state;
    }
};

export default itemsReducer;
