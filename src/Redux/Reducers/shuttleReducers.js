let initialState = {
    shuttleList: null,
    errorList: null,
    shuttleDetail: null,
    errorShuttleDetail: null,
    seatBooked: null
}

const shuttleReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_DATA_LIST_SUCCESS':
            return {shuttleList: action.payload, errorList: null}
        case 'GET_DATA_LIST_FAILED':
            return{shuttleList: null, errorList: action.payload}
        case 'GET_DETAILS_SUCCESS':
            return{...state, shuttleDetail: action.payload, errorList: null}
        case 'GET_DETAILS_FAILED':
            return{...state, errorShuttleDetail: action.payload}
        case 'GET_SEAT_BOOKED':
            return{...state, seatBooked: action.payload}
        default:
            return state
    }
}

export default shuttleReducer