/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native'
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'
import {onSaveAsyncStorage} from './src/Redux/Actions/UserAction'
import OneSignal from 'react-native-onesignal'


// Redux
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Splash
import Splash from './src/Screens/Splash/Splash'

const App = ({user, onSaveAsyncStorage}) => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(async() => {
    getAsyncStorageData()

    OneSignal.setAppId("dd35c0b2-cf6e-448a-ad82-bbc2b211096f");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log("Prompt response:", response);
    });
  }, [])

  const getAsyncStorageData = () => {
    AsyncStorage.getItem('@id')
    .then((result) => {
      onSaveAsyncStorage(result)
      return setIsLogin(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if(isLogin === false){
    return(
      <Splash />
    )
  }
  return (

      <NavigationContainer>
        {
          user.id?
            <MainRouter />
          :
            <RegisterRouter />
        }

      </NavigationContainer>
 
  )
}

const mapDispatchToProps = {
  onSaveAsyncStorage
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    login: state.login
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
