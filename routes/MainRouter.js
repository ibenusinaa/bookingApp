import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../src/Screens/Home/Home'
import Profile from '../src/Screens/Profile/Profile'
import {Icon} from 'native-base'
import HomeStackNavigator from './HomeRouter'
import HistoryStackNavigator from './BookingHistoryRouter'


const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{size: 6, activeTintColor: '#e84545', inactiveTintColor: '#2b2e4a' }}
        >
            <Tab.Screen 
                name='Home' component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => {
                        return(
                            <Icon type='FontAwesome'  name='home' color={color} size={size} />
                        )
                    }
                }} 
            />
            <Tab.Screen 
                name='Booking History' component={HistoryStackNavigator} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon type='FontAwesome'  name='credit-card' color={color} size={size} />
                    )
                }}}
            />
            <Tab.Screen 
                name='Profile' component={Profile} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon type='FontAwesome' name='user' color={color} size={size} />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}

export default MainRouter