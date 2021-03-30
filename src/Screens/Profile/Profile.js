import { Body, Button, Container, Content, Header, Left, Title } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import color from '../../Support/Styles/color'
import spacing from '../../Support/Styles/spacing'
import {onUserLogout} from './../../Redux/Actions/UserAction'


const Profile = ({onUserLogout}) => {
    return(
    <Container>
        <Header style={{...color.bgSecondary}}>
            <Body style={{alignItems: 'center'}}>
                <Title style={{color: 'black'}}>
                    My Account
                </Title>
            </Body>
        </Header>
        <Content>
            <View style={{...color.bgSecondary}}>
                <View style={{...spacing.mtFive, ...spacing.mxFive,  backgroundColor: 'white', borderRadius: 3}}>
                    <View style={{...spacing.mThree }}>
                        <Text>
                            Nama User
                        </Text>
                        <Text>
                            Email
                        </Text>
                    </View>
                </View>
            </View>
            <Button onPress={onUserLogout} style={{width: 50}}>
                <Text>
                    Logout
                </Text>
            </Button>
        </Content>
    </Container>
    )
}

const mapDispatchToProps = {
    onUserLogout
}


export default connect('', mapDispatchToProps)(Profile)