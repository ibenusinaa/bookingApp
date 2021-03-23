import React from 'react'
import { Text, TextInput, View } from 'react-native'

import typography from '../../Support/Styles/typography'
import spacing from '../../Support/Styles/spacing'
import color from '../../Support/Styles/color'
import { Button, Content, Form, Icon, Input, Item, Label} from 'native-base'
import { useState } from 'react'

// Redux
import {connect} from 'react-redux'
import {onUserRegister} from './../../Redux/Actions/UserAction'

const SignUp = ({navigation: {navigate}, onUserRegister, user}) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const onEmailValidation = (input) => {
        console.log(input)
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(regex.test(input)){
            setInputEmail(input)
            setError('')
        }else{
            setError('Email Tidak Valid')
        }
    }

    const onPasswordValidation = (input) => {
        console.log(input)
        let symbol = /[!@#$%^&*]/
        if(input.length < 6){
            return setError('Password Minimal 6 Karakter')
        }
        
        if(!symbol.test(input)){
            return setError('Password Harus Mengandung Simbol')
        }else{
            setInputPassword(input)
            setError('')
        }
    }

    // const onConfirmValidation = (input) => {
    //     let password = inputPassword
    //     if(input === password){
    //         setConfirmPassword(input)
    //         setError('')
    //     }else{
    //         setError('Password tidak sama')
    //     }
    // }

    const submitRegister = () => {
        onUserRegister(inputEmail, inputPassword)
    }
    // const checkStore = () => {
    //     console.log(user.error)
    // }

    return(
        <>
            <Content>
                {/* Welcome sign */}
                <View style={{...spacing.pFive}}>
                    <Text style={{...typography.fsTwenty}}>
                        Register for Booking App
                    </Text>
                    <Text style={{...typography.fsTwelve, ...color.light, ...spacing.mtOne }}>
                        Please fill the data below to complete the registration
                    </Text>
                </View>

                {/* input email password */}
                <View style={{...spacing.mrTwo, marginTop: 40}}>
                    {/* Email */}
                    <Form>
                        <Item stackedLabel>
                            <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Email/Phone Number</Label>
                            <Icon type='FontAwesome' name='user' style={{marginLeft: 10}} />
                            <Input name='email' onChangeText={(input) => {onEmailValidation(input)}} />
                        </Item>
                    </Form>
                    {/* Password */}
                    <Form>
                        <Item stackedLabel>
                            <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Password</Label>
                            <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                            <Input secureTextEntry={true} name= 'password' onChangeText={(input) => {onPasswordValidation(input)}} />
                        </Item>
                    </Form>
                    {/* Confirm */}
                    {/* <Form>
                        <Item stackedLabel>
                            <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Confirm Password</Label>
                            <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                            <Input secureTextEntry={true} name='confirmPassword' onChangeText={(input) => {onConfirmValidation(input)}} />
                        </Item>
                    </Form> */}
                    {
                        error?
                            <Text style={{...typography.fsTwelve, ...spacing.mtTwo, color: 'red', textAlign: 'center'}}>
                                {error}
                            </Text>
                           
                        
                        :
                            null
                    }
                    {
                         user.error?
                            <Text style={{...typography.fsTwelve, ...spacing.mtTwo, color: 'red', textAlign: 'center'}}>
                                {user.error}
                            </Text>
                       
                    
                    :
                             null
                    }
                </View>

                {/* Button Sign up */}         
                <View style={{...spacing.mxThree, marginTop: 30, alignItems: 'center'}}>
                    <View style={{width: '100%'}}>
                        {
                            user.loading?
                                <Button disabled onPress = {submitRegister} rounded info style={{width: '100%'}}>
                                    <View style={{alignItems:'center', width: '100%'}}>
                                        <Text style={{color: 'white'}}>
                                            test loading
                                        </Text>
                                    </View>
                                </Button>
                            :
                                <Button disabled={inputEmail === '' || inputPassword === '' || error !== ''? true : false} onPress = {submitRegister} rounded info style={{width: '100%'}}>
                                    <View style={{alignItems:'center', width: '100%'}}>
                                        <Text style={{color: 'white'}}>
                                            Sign up
                                        </Text>
                                    </View>
                                </Button>
                        }
                    </View>
                    {/* <View style={{width: '100%'}}>
                        <Button onPress = {checkStore} rounded info style={{width: '100%'}}>
                            <View style={{alignItems:'center', width: '100%'}}>
                                <Text style={{color: 'white'}}>
                                    check
                                </Text>
                            </View>
                        </Button>
                    </View> */}
                    <Text style={{...spacing.myFive}}>
                        or sign up with
                    </Text>
                    {/* Google */}
                    <View style={{width: '100%'}}>
                        <Button rounded style={{...spacing.mbThree, width: '100%', backgroundColor: 'white'}}>
                            <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                <Icon type='FontAwesome5' name='google' style={{color: 'black'}} />
                                <Text style={{color: 'black'}}>
                                    Sign up with Google
                                </Text>
                            </View>
                        </Button>
                    </View>
                    {/* Facebook */}
                    <View style={{width: '100%'}}>
                        <Button rounded style={{...spacing.mbThree, width: '100%', backgroundColor: '#4267B2'}}>
                            <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                <Icon type='FontAwesome5' name='facebook' style={{color: 'white'}} />
                                <Text style={{color: 'white'}}>
                                    Sign up with Facebook
                                </Text>
                            </View>
                        </Button>
                    </View>
                </View>

                <View style={{alignItems: 'center', marginTop: 10}} >
                    <Text style={{...typography.fsTwelve}}>
                        Already have an account? <Text onPress={() => {navigate('Sign In')}} style={{...color.link}} > Sign In Here </Text>
                    </Text>
                </View>
            </Content>
                
        </>
    )
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)