export const FETCH_ALL_ITEMS_BEGIN = 'FETCH_ALL_ITEMS_BEGIN'
export const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS'
export const FETCH_ALL_ITEMS_FAILURE = 'FETCH_ALL_ITEMS_FAILURE'

export const FETCH_ITEM_BY_ID_BEGIN = 'FETCH_ITEM_BY_ID_BEGIN'
export const FETCH_ITEM_BY_ID_SUCCESS = 'FETCH_ITEM_BY_ID_SUCCESS'
export const FETCH_ITEM_BY_ID_FAILURE = 'FETCH_ITEM_BY_ID_FAILURE'


export const DELETE_ITEM_BEGIN = 'DELETE_ITEM_BEGIN'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

export const UPDATE_ITEM_BEGIN = 'UPDATE_ITEM_BEGIN'
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE'

export const ADD_ITEM_BEGIN = 'ADD_ITEM_BEGIN'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'


function fetchAllItemsBegin() {
    return {
        type: FETCH_ALL_ITEMS_BEGIN
    }
}

function fetchAllItemsSuccess(data) {
    return {
        type: FETCH_ALL_ITEMS_SUCCESS,
        data: data,
        receivedAt: Date.now()
    }
}

function fetchAllItemsFailure(error) {
    return {
        type: FETCH_ALL_ITEMS_FAILURE,
        error: error,
        receivedAt: Date.now()
    }
}

// Functions ...
export function fetchAllItems() {
    return function (dispatch) {
        dispatch(fetchAllItemsBegin())
        return fetch(`https://octo-found-server.herokuapp.com/`, {
                method: 'GET'
            })
            .then(
                response => response.json(),
                error => {
                  console.log('An error occurred.', error)
                  return dispatch(fetchAllItemsFailure(error))
                }
            )
            .then(data => {
                return dispatch(fetchAllItemsSuccess(data))
                }
            )
    }
}
