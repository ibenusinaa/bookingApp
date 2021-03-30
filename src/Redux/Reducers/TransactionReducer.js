let initialState = {
    dataTransaction: null,
    purchaseHistory: null
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_TRANSACTION_SUCCESS':
            return {...state, dataTransaction: action.payload }
        case 'GET_PURCHASE_HISTORY_SUCCESS':
            return {...state, purchaseHistory: action.payload}
        default:
            return state
    }
}

export default transactionReducer