/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native'
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'
import {onSaveAsyncStorage} from './src/Redux/Actions/UserAction'

// Redux
import {applyMiddleware, createStore} from 'redux'
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './src/Redux/Reducers/index'
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(allReducer, applyMiddleware(thunk))

const App = ({user, onSaveAsyncStorage}) => {

  useEffect(() => {
    console.log(user.id)
    getAsyncStorageData()
  }, [])

  const getAsyncStorageData = () => {
    AsyncStorage.getItem('@id')
    .then((result) => {
      onSaveAsyncStorage(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (

      <NavigationContainer>
        {
          user.id?
            <MainRouter />
          :
            <RegisterRouter />
        }
     
        {/* <MainRouter /> */}
      </NavigationContainer>
 
  )
}

const mapDispatchToProps = {
  onSaveAsyncStorage
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
