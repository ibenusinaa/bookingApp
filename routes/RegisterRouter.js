import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Screens
import SignIn from './../src/Screens/SignIn/SignIn'
import SignUp from './../src/Screens/SignUp/SignUp'

const Stack = createStackNavigator()
const RegisterRouter = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name='Sign In' component={SignIn} />
        </Stack.Navigator>
    )
}

export default RegisterRouter