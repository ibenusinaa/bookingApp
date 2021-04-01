let initialState = {
    dataTransaction: null,
    purchaseHistory: null,
    expiredAt: null
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_TRANSACTION_SUCCESS':
            return {...state, dataTransaction: action.payload }
        case 'GET_PURCHASE_HISTORY_SUCCESS':
            return {...state, purchaseHistory: action.payload}
        case 'GET_EXPIREDAT':
            return{...state, expiredAt:action.payload}
        default:
            return state
    }
}

export default transactionReducer