export const REQUEST_ALL_ITEMS = 'REQUEST_ALL_ITEMS'

function requestAllItems() {
    return {
        type: REQUEST_ALL_ITEMS
    }
}

export const RECIEVE_ALL_ITEMS = 'RECEIVE_POSTS'

function recieveAllItems(data) {
    return {
        type: RECIEVE_ALL_ITEMS,
        data: data.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export const REQUEST_DELETE_ITEM = 'REQUEST_DELETE_ITEM'

function requestDeleteItem(id) {
    return {
        type: REQUEST_DELETE_ITEM,
        id
    }
}

export const RECIEVE_DELETE_ITEM = 'RECIEVE_DELETE_ITEM'

function recieveDeleteItem(id) {
    return {
        type: RECIEVE_DELETE_ITEM,
        id
    }
}

export const REQUEST_UPDATE_ITEM = 'UPDATE_ITEM'

function requestUpdateItem(id, data) {
    return {
        type: REQUEST_UPDATE_ITEM,
        id,
        data
    }
}

export const RECIEVE_UPDATE_ITEM = 'RECIEVE_UPDATE_ITEM'

function recieveUpdateItem(id, data) {
    return {
        type: RECIEVE_UPDATE_ITEM,
        id,
        data
    }
}

export function getAllItems() {
    return function (dispatch) {

        dispatch(requestAllItems())
        return fetch(`https://www.reddit.com/r/.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data =>
                dispatch(recieveAllItems(data))
            )
    }
}

export function updateItem(id, data) {
    return function (dispatch) {

        dispatch(requestUpdateItem(id, data))
        return fetch(`https://www.reddit.com/r/.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data =>
                dispatch(recieveAllItems(data))
            )
    }
}