/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux Store
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './src/Redux/Reducers/index'
import { Root } from 'native-base';

const store = createStore(allReducer, applyMiddleware(thunk))

const Index = () => {
    return(
        <Provider store={store}>
            <Root>
                <App />
            </Root>
        </Provider>
        
    )
}

AppRegistry.registerComponent(appName, () => Index);
