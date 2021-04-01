let initialState = {
    id: '',
    error: '',
    loading: null,
    email: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'LOGOUT_SUCCESS':
            return {id: '', error: '', loading: null}
        case 'AUTH_SUCCESS':
            return {id: action.payload, error: '', email: action.another, loading: null}
        case 'AUTH_FAILED':
            return {...state, error: action.payload, loading: null}
        default: 
        return state
    }
}

export default userReducer