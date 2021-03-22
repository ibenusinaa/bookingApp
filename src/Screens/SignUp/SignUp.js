import React from 'react'
import { Text, TextInput, View } from 'react-native'


import typography from '../../Support/Styles/typography'
import spacing from '../../Support/Styles/spacing'
import color from '../../Support/Styles/color'
import { Button, Content, Form, Icon, Input, Item, Label} from 'native-base'

const SignUp = () => {
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
                            <Input/>
                        </Item>
                    </Form>
                    {/* Password */}
                    <Form>
                        <Item stackedLabel>
                            <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Password</Label>
                            <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                    {/* Confirm */}
                    <Form>
                        <Item stackedLabel>
                            <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Confirm Password</Label>
                            <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                </View>

                {/* Button Sign up */}         
                <View style={{...spacing.mxThree, marginTop: 40, alignItems: 'center'}}>
                    <View style={{width: '100%'}}>
                        <Button rounded info style={{width: '100%'}}>
                            <View style={{alignItems:'center', width: '100%'}}>
                                <Text style={{color: 'white'}}>
                                    Sign in
                                </Text>
                            </View>
                        </Button>
                    </View>
                    <Text style={{...spacing.myFive}}>
                        or sign in with
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

                <View style={{alignItems: 'center', marginTop: 70}}>
                    <Text style={{...typography.fsTwelve}}>
                        Already have an account? <Text style={{...color.link}}> Sign In Here </Text>
                    </Text>
                </View>
            </Content>
                
        </>
    )
}

export default SignUp