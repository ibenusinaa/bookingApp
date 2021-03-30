import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Payment from '../src/Screens/payment/payment'
import BookingHistory from '../src/Screens/BookingHistory/BookingHistory'
import payment from '../src/Screens/payment/payment'
const Stack = createStackNavigator()
const HistoryStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Booking History' component={BookingHistory} />
            <Stack.Screen name = 'Payment' component={payment} />
        </Stack.Navigator>
    )
}

export default HistoryStackNavigator