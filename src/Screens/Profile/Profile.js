import { Body, Button, Col, Container, Content, Grid, Header, Left, Title } from 'native-base'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import color from '../../Support/Styles/color'
import spacing from '../../Support/Styles/spacing'
import {onUserLogout} from './../../Redux/Actions/UserAction'
import ImagePicker from 'react-native-image-crop-picker';
import { useState } from 'react'



const Profile = ({onUserLogout, user}) => {

    const [image, setImage] =  useState(null)

    const getImage = () => {
        // OPEN CAMERA
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        //   }).then(image => {
        //     setImage(image.path)
        //   });

        //   OPEN GALLERY
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setImage(image.path)
          });
    }

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
            <Grid style={{...color.bgSecondary}}>
                {/* <View style={{...spacing.mtFive, ...spacing.mxFive,  backgroundColor: 'white', borderRadius: 3}}>
                    <View style={{...spacing.mThree }}>
                        <Text>
                            Nama User
                        </Text>
                        <Text>
                            Email
                        </Text>
                    </View>
                </View> */}
                <Col style={{...spacing.mFive, alignItems: 'center'}}>
                    
                        <Image 
                            source={{uri: image }}
                            style={{width: 50, height: 50, borderRadius: 10}}
                        />
                        <Button rounded onPress={getImage} style={{width: 100}}>
                            <Text style={{textAlign: 'center', width: '100%', ...color.light}}>
                                Edit Photo
                            </Text>
                        </Button>
                    
                </Col>
                <Col>
                    <Text>
                        Nama User
                    </Text>
                    <Text>
                        {user.email}
                    </Text>
                    <Button onPress={onUserLogout} style={{width: 80}}>
                        <Text style={{...color.light, textAlign: 'center', width: '100%'}}>
                            Logout
                        </Text>
                    </Button>
                </Col>
            </Grid>
            
        </Content>
    </Container>
    )
}
const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    onUserLogout
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)