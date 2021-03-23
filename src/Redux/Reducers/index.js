import {combineReducers} from 'redux'

// reducers
import userReducer from './UserReducer'

const allReducer = combineReducers(
    {
        user: userReducer
    }
)

export default allReducer