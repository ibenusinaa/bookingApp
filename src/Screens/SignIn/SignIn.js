import React from 'react'
import { Text, TextInput, View } from 'react-native'


import typography from '../../Support/Styles/typography'
import spacing from '../../Support/Styles/spacing'
import color from '../../Support/Styles/color'
import { Button, Form, Icon, Input, Item, Label, Footer, Content, Row, Grid} from 'native-base'

const SignIn = () => {
    return(
        <>
           
            <Content>

                    <View>
                        <View style={{...spacing.pFive}}>
                            <Text style={{...typography.fsThirty}}>
                                Welcome
                            </Text>
                            <Text style={{...typography.fsSixteen, ...color.light }}>
                                Sign In to your account to continue booking
                            </Text>
                        </View>

                    
                        <View style={{...spacing.mrTwo, marginTop: 40}}>
                            
                            <Form>
                                <Item stackedLabel>
                                    <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Email/Phone Number</Label>
                                    <Icon type='FontAwesome' name='user' style={{marginLeft: 10}} />
                                    <Input/>
                                </Item>
                            </Form>
                            <Form>
                                <Item stackedLabel>
                                    <Label style={{...typography.fsTwelve, ...color.light, marginLeft: -28}}>Password</Label>
                                    <Icon type='FontAwesome' name='lock' style={{marginLeft: 10}} />
                                    <Input secureTextEntry={true}/>
                                </Item>
                            </Form>
                            <Text style={{...typography.fsTwelve, ...spacing.myTwo, color: 'blue', textAlign: 'right'}}>
                                Forgot Password?
                            </Text>
                        </View>

                            
                        <View style={{...spacing.mxThree, marginTop: 50, alignItems: 'center'}}>
                            <View style={{width: '100%'}}>
                                <Button rounded info style={{width: '100%'}}>
                                    <Text style={{color: 'white', width: '100%', textAlign: 'center'}}>
                                        Sign in
                                    </Text>                        
                                </Button>
                            </View>
                            <Text style={{...spacing.myFive}}>
                                or sign in with
                            </Text>
                            {/* Google */}
                            <View style={{width: '100%'}}>
                                <Button rounded style={{...spacing.mbThree, width: '100%', backgroundColor: '#f4f9f9'}}>
                                    <View style={{flexDirection: 'row', marginLeft: -20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                        <Icon type='FontAwesome5' name='google' style={{color:'black'}} />
                                        <Text style={{color: 'black'}}>
                                            Sign in with Google
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
                                            Sign in with Facebook
                                        </Text>
                                    </View>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent:'flex-end', backgroundColor:'white'}}>
                        <Text style={{...typography.fsTwelve}}>
                            Already have an account? <Text style={{...color.link}}> Sign In Here </Text>
                        </Text>
                    </View>
  

            </Content>

                
        </>
    )
}

export default SignIn