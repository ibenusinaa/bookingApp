const initialState = {
    departure: null,
    arrival: null,
    date: null,
    seat: null
}

const filterReducer= (state = initialState, action) =>{
    switch(action.type){
        case 'ON_SET_DEPARTURE':
            return{...state, departure: action.payload}
        case 'ON_SET_ARRIVAL':
            return{...state, arrival: action.payload}
        case 'ON_SET_DATE':
            return{...state, date: action.payload}
        case 'ON_SET_SEAT':
            return{...state, seat: action.payload}
        default:
            return state
    }
}

export default filterReducer