import { Button } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import spacing from '../../Support/Styles/spacing'
import {onUserLogout} from './../../Redux/Actions/UserAction'


const Profile = ({onUserLogout}) => {
    return(
    <View style={{...spacing.pFive}}>
        <Text>
            ini Profile Screen
        </Text>
        <Button onPress={onUserLogout} style={{width: 50}}>
            <Text>
                Logout
            </Text>
        </Button>
    </View>
    )
}

const mapDispatchToProps = {
    onUserLogout
}


export default connect('', mapDispatchToProps)(Profile)