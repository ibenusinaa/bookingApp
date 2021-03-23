let initialState = {
    id: '',
    error: '',
    loading: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'LOGOUT_SUCCESS':
            return {id: '', error: '', loading: null}
        case 'REGISTER_SUCCESS':
            console.log('testing reducer')
            return {id: action.payload, error: '', loading: null}
        case 'REGISTER_FAILED':
            return {...state, error: action.payload, loading: null}
        default: 
        return state
    }
}

export default userReducer