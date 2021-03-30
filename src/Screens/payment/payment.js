import { Accordion, Body, Button, Col, Container, Content, Grid, Header, Icon, Row, Text, Title, View } from 'native-base'
import React, {useEffect, useState} from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import color from '../../Support/Styles/color'
import spacing from '../../Support/Styles/spacing'
import typography from '../../Support/Styles/typography'
import CountDown from 'react-native-countdown-component';
import moment from 'moment'

import {getDataTransaction} from './../../Redux/Actions/TransactionAction'
import axios from 'axios'
import { linkAPI } from '../../Support/Constants/linkAPI'


const Payment = ({navigation, route, getDataTransaction, transaction}) => {

    const [countExpired, setCountExpired] = useState(null)

    useEffect(() => {
        getDataTransaction(route.params.idTransaction)
        
        if(transaction.dataTransaction){
            expiredTransanctions()
            console.log('masuk useEffect')
        }
        
    }, [])

    const expiredTransanctions = () => {
        console.log('masuk ke expired')
        let expiredAt = transaction.dataTransaction.expiredAt
        let now = moment(new Date()).utcOffset('+07.00').format('YYYY-MM-DD HH:mm:ss')
        let different = moment.duration(moment(expiredAt).diff(moment(now)))
        console.log(expiredAt + 'expired')
        console.log(now + 'sekarang')
        console.log(different)
        let seconds = different.asSeconds()
        console.log(seconds + 'detik')

        setCountExpired(seconds)
    }

    const onFinish = () => {
        alert('Pesananmu kami batalkan karena melewati waktu pembayaran')
        axios.patch(linkAPI + `/transactions/${route.params.idTransaction}`, {status: 'Cancelled'})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onPayment = () => {
        axios.patch(linkAPI + `/transactions/${route.params.idTransaction}`, {status: 'Paid', expiredAt: ''})
        .then((res) => {
            getDataTransaction(route.params.idTransaction)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onCheck = () => {
        console.log(countExpired)
    }

    const dataArray=[
        { title: 'Details', content: 'Masih belum'}
    ]

    if(transaction.dataTransaction === null && countExpired === null){
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
                <Text style={{textAlign: 'center', ...typography.fsFive}}>
                    Loading
                </Text>
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
                                                until={countExpired? countExpired : 90}
                                                onFinish={onFinish}
                                                timeLabels={{m: null, s: null}}
                                                timeToShow={['M', 'S']}
                                                size={18}
                                            />
                                        :
                                            <Text>
                                                Paid
                                            </Text>
                                    }
                                    
                                </View>
                            </Col>
                        </Grid>
                        <View style={{...spacing.mxFive}}>
                            <Accordion
                                style={{zIndex: 0}} 
                                headerStyle={{...color.bgSecondary}}
                                contentStyle={{...color.bgSecondary}}
                                dataArray={dataArray} expanded={[0]} />
                        </View>
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
                    <View style={{...spacing.mFive}}>
                        <Button block onPress={onPayment}>
                            <Text>
                                Pay Now
                            </Text>
                        </Button>
                        <Button block onPress={onCheck}>
                            <Text>
                                Check Expired
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        </>
    )
}

const mapDispatchToProps = {
    getDataTransaction
}

const mapStateToProps = (state) => {
    return{
        transaction: state.transaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)