import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../src/Screens/Home/Home'
import ShuttleList from '../src/Screens/ShuttleList/ShuttleList'
import shuttleDetails from '../src/Screens/shuttleDetails/shuttleDetails'
import BookingDetail from '../src/Screens/BookingDetail/bookingDetail'
import Payment from '../src/Screens/payment/payment'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ShuttleList' component={ShuttleList} />
            <Stack.Screen name='ShuttleDetails' component={shuttleDetails} />
            <Stack.Screen name='BookingDetail' component={BookingDetail} />
            <Stack.Screen name='Payment' component={Payment} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator