import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {linkAPI} from '../../Support/Constants/linkAPI'

export const onUserRegister = (inputEmail, inputPassword) => {
    return(dispatch) => {

        dispatch(
            {
                type: 'LOADING'
            }
        )
        
        Axios.get(linkAPI + `/users?email=${inputEmail}`)
        .then((res) => {
            if(res.data.length === 1){
                dispatch(
                    {
                        type: 'REGISTER_FAILED',
                        payload: 'Email Sudah Terdaftar'
                    }
                )
            }else{
                Axios.post(linkAPI + '/users', {email: inputEmail, password: inputPassword})
                .then((response) => {
                    AsyncStorage.setItem('@id', (response.data.id).toString())
                    .then((reAsyncStorage) => {
                        dispatch(
                            {
                                type: 'REGISTER_SUCCESS',
                                payload: response.data.id
                            }
                           
                        )
                    })
                    .catch((errAsyncStorage) => {
                        console.log(errAsyncStorage)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const onSaveAsyncStorage = (id) => {
    return(dispatch) => {
        dispatch(
            {
                type: 'REGISTER_SUCCESS',
                payload: id
            }
        )
    }
}

export const onUserLogout = () => {
    return(dispatch) => {
        AsyncStorage.removeItem('@id')
        .then((res) => {
            dispatch(
                {
                    type: 'LOGOUT_SUCCESS'
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}