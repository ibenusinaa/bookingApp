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
                        type: 'AUTH_FAILED',
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
                                type: 'AUTH_SUCCESS',
                                payload: response.data.id
                            },
                            {
                                type: 'EMAIL_STORED',
                                payload: response.data.email
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
                type: 'AUTH_SUCCESS',
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

export const onUserLogin = (inputEmail, inputPassword) => {
    return(dispatch) => {

        dispatch(
            {
                type: 'LOADING'
            }
        )
        
        Axios.get(linkAPI + '/users?email=' + inputEmail + '&password=' + inputPassword)
        .then((resp) => {
            if(resp.data.length === 1){
                console.log(resp.data[0])
                AsyncStorage.setItem('@id', (resp.data[0].id).toString())
                .then((reAsyncStorage) => {
                    dispatch(
                        {
                            type: 'AUTH_SUCCESS',
                            payload: resp.data[0].id,
                            another: resp.data[0].email
                        }
                    )
                })
                .catch((errAsyncStorage) => {
                    console.log(errAsyncStorage)
                })

                
            }else{
                dispatch(
                    {
                        type: 'AUTH_FAILED',
                        payload: 'Email atau Password Salah'
                    }
                )
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}