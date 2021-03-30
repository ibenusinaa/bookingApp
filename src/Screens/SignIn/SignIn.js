import React,  { useState } from 'react'
import { Text, TextInput, View } from 'react-native'


import typography from '../../Support/Styles/typography'
import spacing from '../../Support/Styles/spacing'
import color from '../../Support/Styles/color'
import { Button, Form, Icon, Input, Item, Label, Footer, Content, Row, Grid} from 'native-base'

import {onUserLogin} from './../../Redux/Actions/UserAction'
import { connect } from 'react-redux'


const SignIn = ({navigation: {navigate}, onUserLogin, user}) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState('')

    const submitLogin = () => {
        if(inputEmail === '' || inputPassword === ''){
            return setError('Email dan password harus diisi')
        }else{
            onUserLogin(inputEmail, inputPassword)
        }
    }

    return(
        <> 
            <Content>
                <Grid>
                    <Row style={{...spacing.mtFive, ...spacing.mlFive}}>
                        <Text style={{...typography.fsThirty}}>
                            Welcome
                        </Text>
                    </Row>
                    <Row style={{...spacing.mlFive}}>
                        <Text style={{...typography.fsSixteen, ...color.light }}>
                            Sign In to your account to continue booking
                        </Text>
                    </Row>

                
                    <Grid style={{...spacing.mrTwo, marginTop: 40}}>
                        <Row>
                            <Form>
                                <Item stackedLabel>
                                    <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Email/Phone Number</Label>
                                    <Icon type='FontAwesome' name='user' style={{marginLeft: 10}} />
                                    <Input name='email' onChangeText={(input) => {setInputEmail(input)}} />
                                </Item>
                            </Form>
                        </Row>
                        <Row>
                            <Form>
                                <Item stackedLabel>
                                    <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Password</Label>
                                    <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                                    <Input secureTextEntry={true} onChangeText={(input) => {setInputPassword(input)}}/>
                                </Item>
                            </Form>
                        </Row>
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
                      
                        <Text style={{...typography.fsTwelve, ...spacing.myTwo, color: 'blue', textAlign: 'right'}}>
                            Forgot Password?
                        </Text>
                    </Grid>

                        
                    <Grid style={{...spacing.mxThree, marginTop: 50, alignItems: 'center'}}>
                        <Row>
                            <Row style={{width: '100%'}}>
                            {
                            user.loading?
                                <Button disabled rounded info style={{width: '100%'}}>
                                    <View style={{alignItems:'center', width: '100%'}}>
                                        <Text style={{color: 'white'}}>
                                            Please Wait...
                                        </Text>
                                    </View>
                                </Button>
                            :
                                <Button disabled={inputEmail === '' || inputPassword === '' || error !== ''? true : false} onPress = {submitLogin} rounded info style={{width: '100%'}}>
                                    <View style={{alignItems:'center', width: '100%'}}>
                                        <Text style={{color: 'white'}}>
                                            Sign in
                                        </Text>
                                    </View>
                                </Button>
                        }
                            </Row>
                        </Row>
                        <Text style={{...spacing.myFive}}>
                                or sign in with
                        </Text>
                        {/* Google */}
                        <Row style={{width: '100%'}}>
                            <Button rounded style={{...spacing.mbThree, width: '100%', backgroundColor: '#f4f9f9'}}>
                                <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                    <Icon type='FontAwesome5' name='google' style={{color:'black'}} />
                                    <Text style={{color: 'black'}}>
                                        Sign in with Google
                                    </Text>
                                </View>
                            </Button>
                        </Row>
                        {/* Facebook */}
                        <Row style={{width: '100%'}}>
                            <Button rounded style={{...spacing.mbThree, width: '100%', backgroundColor: '#4267B2'}}>
                                <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                    <Icon type='FontAwesome5' name='facebook' style={{color: 'white'}} />
                                    <Text style={{color: 'white'}}>
                                        Sign in with Facebook
                                    </Text>
                                </View>
                            </Button>
                        </Row>
                    </Grid>
                </Grid>
                <Grid>
                    <Row style={{alignItems: 'center', justifyContent:'center', marginTop: 40}}>
                        <Text style={{...typography.fsTwelve}}>
                            Don't have an account? <Text onPress={() => {navigate('Sign Up')}} style={{...color.link}}> Sign Up Here </Text>
                        </Text>
                    </Row>
                </Grid>
            </Content>   
        </>
    )
}

const mapDispatchToProps = {
    onUserLogin
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)