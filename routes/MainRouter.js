import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BookingHistory from '../src/Screens/BookingHistory/BookingHistory'
import Home from '../src/Screens/Home/Home'
import Profile from '../src/Screens/Profile/Profile'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Booking History' component={BookingHistory} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default MainRouter