import React from 'react'
import { Text, TextInput, View } from 'react-native'


import typography from '../../Support/Styles/typography'
import spacing from '../../Support/Styles/spacing'
import color from '../../Support/Styles/color'
import { Button, Form, Icon, Input, Item, Label, Footer, Content, Row, Grid} from 'native-base'
import { useState } from 'react'

const SignIn = ({navigation: {navigate}}) => {

    const [inputEmail, setInputEmail] = useState('')
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
                                    <Input name='email' onChangeText={(input) => {onEmailValidation(input)}} />
                                </Item>
                            </Form>
                        </Row>
                        <Row>
                            <Form>
                                <Item stackedLabel>
                                    <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Password</Label>
                                    <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                                    <Input secureTextEntry={true}/>
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
                      
                        <Text style={{...typography.fsTwelve, ...spacing.myTwo, color: 'blue', textAlign: 'right'}}>
                            Forgot Password?
                        </Text>
                    </Grid>

                        
                    <Grid style={{...spacing.mxThree, marginTop: 50, alignItems: 'center'}}>
                        <Row>
                            <Row style={{width: '100%'}}>
                                <Button rounded info style={{width: '100%'}}>
                                    <Text style={{color: 'white', width: '100%', textAlign: 'center'}}>
                                        Sign in
                                    </Text>                        
                                </Button>
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

export default SignIn