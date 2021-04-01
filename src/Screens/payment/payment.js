import { Accordion, Body, Button, Col, Container, Content, Grid, Header, Icon, Row, Spinner, Text, Title, View } from 'native-base'
import React, {useEffect, useState} from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import color from '../../Support/Styles/color'
import spacing from '../../Support/Styles/spacing'
import typography from '../../Support/Styles/typography'
import CountDown from 'react-native-countdown-component';
import moment from 'moment'

import {getDataTransaction, getPurchaseHistory} from './../../Redux/Actions/TransactionAction'
import axios from 'axios'
import { linkAPI } from '../../Support/Constants/linkAPI'


const Payment = ({navigation, route, getDataTransaction, transaction, user,  getPurchaseHistory}) => {

    useEffect(() => {
        getDataTransaction(route.params.idTransaction)
        
        
    }, [])

    const onFinish = () => {
        alert('Pesananmu kami batalkan karena melewati waktu pembayaran')
        axios.patch(linkAPI + `/transactions/${route.params.idTransaction}`, {status: 'Cancelled'})
        .then((res) => {
            getPurchaseHistory(user.id)
            getDataTransaction(route.params.idTransaction)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onPayment = () => {
        axios.patch(linkAPI + `/transactions/${route.params.idTransaction}`, {status: 'Paid', expiredAt: ''})
        .then((res) => {
            getPurchaseHistory(user.id)
            getDataTransaction(route.params.idTransaction)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onCheck = () => {
        console.log(countExpired)
    }


    if(transaction.dataTransaction === null){
        return(
            <Container>
            <Header style={{...color.bgSecondary}}>
                <Body>
                    <Grid style={{alignItems: 'center'}}>
                        <Col style={{width: 90}}>
                            <Icon type ='FontAwesome5' name='arrow-left' style={{...typography.fsTwentyFour}} onPress={() => navigation.goBack()} />
                        </Col>
                        <Col>
                            <Title style={{...color.dark}}>
                                Select Payment Options
                            </Title>
                        </Col>
                    </Grid>
                </Body>
            </Header>
            <Content>
                <View style={{alignItems: 'center', justifyContent: 'center', ...spacing.mtFive}}>
                    <Spinner color = 'blue' />
                </View>
            </Content>
            </Container>
        )
    }

    return(
        
        <>
            <Container>
                <Header style={{...color.bgSecondary}}>
                    <Body>
                        <Grid style={{alignItems: 'center'}}>
                            <Col style={{width: 90}}>
                                <Icon type ='FontAwesome5' name='arrow-left' style={{...typography.fsTwentyFour}} onPress={() => navigation.goBack()} />
                            </Col>
                            <Col>
                                <Title style={{...color.dark}}>
                                    Select Payment Options
                                </Title>
                            </Col>
                        </Grid>
                    </Body>
                </Header>
                <Content>
                    <View style={{...color.bgSecondary}}>
                        
                        <Grid style={{...spacing.mFive}}>
                            <Col>
                                <Text>
                                    {transaction.dataTransaction.from}
                                </Text>
                                <Text style={{...spacing.mtTwo}}>
                                    07.30 WIB
                                </Text>
                                <Text>
                                    {transaction.dataTransaction.departureDate}
                                </Text>
                                <Text>
                                    {transaction.dataTransaction.name}
                                </Text>
                                <Text style={{...spacing.mtTwo, ...typography.fsBold, ...typography.fsTwentyFour}}>
                                    Rp{transaction.dataTransaction.totalPrice}
                                </Text>
                            </Col>
                            <Col style={{alignItems: 'center'}}>
                                <Icon type='FontAwesome' name='long-arrow-right' />
                            </Col>
                            <Col style={{alignItems: 'flex-end'}}>
                                <Text>
                                    {transaction.dataTransaction.to}
                                </Text>
                                <Text style={{...spacing.mtTwo}}>
                                    12.00 WIB
                                </Text>
                                <View style={{...spacing.mtFive}}>
                                    {
                                        transaction.dataTransaction.status === 'Unpaid'?
                                            <CountDown 
                                                until={transaction.expiredAt}
                                                onFinish={onFinish}
                                                timeLabels={{m: null, s: null}}
                                                timeToShow={['M', 'S']}
                                                size={18}
                                            />
                                        :
                                            null
                                    }
                                    
                                </View>
                            </Col>
                        </Grid>
                    </View>
                    <View style={{...spacing.mFive}}>
                        <Row style={{alignItems : 'center'}}>
                            <Icon type='FontAwesome5' name='lock' style={{...typography.fsSixteen}} />
                            <Text style={{...spacing.mlTwo, ...typography.fsFifteen}}>
                                Safe & Secure Payment
                            </Text>
                        </Row>
                        <View style={{...spacing.mtTwo}}>
                            <Text style={{...typography.fsTwenty, ...typography.fsBold}}>
                                Preferred Options
                            </Text>
                        </View>
                    </View>
                    <Grid style={{borderTopWidth: 0.8, borderColor: 'grey'}}>
                        <Row style={{borderBottomWidth: 0.8, borderColor: 'grey', alignItems:'center', ...spacing.mxThree}}>
                            <Col style={{width: 80}}>
                                <Image 
                                    source={{uri: 'https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png'}}
                                    style={{width: 50, height: 50, resizeMode: 'center'}} />
                            </Col>
                            <Col>
                                <Text style={{...typography.fsBold}}>
                                    Bank BCA
                                </Text>
                            </Col>
                            <Col style={{alignItems: 'flex-end'}}>
                                <Icon type='SimpleLineIcons' name='arrow-right' style={{...typography.fsTwenty, justifyContent: 'flex-end'}} />
                            </Col>
                        </Row>
                        <Row style={{borderBottomWidth: 0.8, borderColor: 'grey', alignItems:'center', ...spacing.mxThree}}>
                            <Col style={{width: 80}}>
                                <Image 
                                    source={{uri: 'https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png'}}
                                    style={{width: 50, height: 50, resizeMode: 'center'}} />
                            </Col>
                            <Col>
                                <Text style={{...typography.fsBold}}>
                                    Bank BCA
                                </Text>
                            </Col>
                            <Col style={{alignItems: 'flex-end'}}>
                                <Icon type='SimpleLineIcons' name='arrow-right' style={{...typography.fsTwenty, justifyContent: 'flex-end'}} />
                            </Col>
                        </Row>   
                    </Grid>
                    {
                        transaction.dataTransaction.status === 'Unpaid'?
                            <View style={{...spacing.mFive}}>
                                <Button block onPress={onPayment}>
                                    <Text>
                                        Pay Now
                                    </Text>
                                </Button>                     
                            </View>
                        :
                            null
                    }
                </Content>
            </Container>
        </>
    )
}

const mapDispatchToProps = {
    getDataTransaction,
    getPurchaseHistory
}

const mapStateToProps = (state) => {
    return{
        transaction: state.transaction,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)