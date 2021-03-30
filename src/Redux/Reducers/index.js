import {combineReducers} from 'redux'

// reducers
import userReducer from './UserReducer'
import filterReducer from './FilterReducer'
import shuttleReducer from './shuttleReducers'
import transactionReducer from './TransactionReducer'

const allReducer = combineReducers(
    {
        user: userReducer,
        filter: filterReducer,
        shuttle: shuttleReducer,
        transaction: transactionReducer
    }
)

export default allReducer