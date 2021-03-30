import axios from 'axios'
import {linkAPI} from './../../Support/Constants/linkAPI'

export const getDataTransaction = (id) => {
    return(dispatch) => {

        axios.get(`${linkAPI}/transactions/${id}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_TRANSACTION_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const getPurchaseHistory = (id) => {
    return(dispatch) => {
        
        axios.get(`${linkAPI}/transactions?idUser=${id}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_PURCHASE_HISTORY_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
