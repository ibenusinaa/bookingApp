import { Body, Header, Col, Content, Grid, Icon, Text, Row, Container, Title, Button } from 'native-base'
import React, {useEffect, useState, useRef} from 'react'
import { TouchableOpacity, View } from 'react-native'

import spacing from './../../Support/Styles/spacing'
import color from './../../Support/Styles/color'
import typography from '../../Support/Styles/typography'
import {getPurchaseHistory} from '../../Redux/Actions/TransactionAction'
import { connect } from 'react-redux'

const BookingHistory = ({getPurchaseHistory, user, purchaseHistory, navigation: {navigate}}) => {


    useEffect(() => {
        getPurchaseHistory(user.id)
    }, [])

    return(
        <Container>
            <Header style={{alignItems: 'center', ...color.bgSecondary}}>
                <Title style={{color: 'black'}}>
                    My Purchase List
                </Title>
            </Header>
            <Content>
            {
                purchaseHistory.purchaseHistory?
                    purchaseHistory.purchaseHistory.map((value, index) => {
                        return(       
                            <View key={index} style={{...spacing.mtFive,  ...spacing.mxFive, borderColor: 'grey', borderWidth: 0.3, borderRadius: 3, elevation: 2, backgroundColor: 'white'}}>
                                <Grid style={{...spacing.mxFive, ...spacing.mtFive, ...spacing.mbTwo, borderBottomColor: 'grey', borderBottomWidth: 0.3}}>
                                    <Col>
                                        {
                                            value.status === 'Paid'?
                                                <Text style={{color: 'green'}}>
                                                    Success
                                                </Text>
                                            :
                                                value.status === 'Cancelled'?
                                                    <Text style={{color: 'red'}}>
                                                        Cancelled
                                                    </Text>
                                                :
                                                    <Text style={{color: 'black'}}>
                                                        Unpaid
                                                    </Text>
                                        }
                                    </Col>
                                    {
                                        value.status === 'Unpaid'?
                                            <Col>
                                                <TouchableOpacity onPress={() => navigate('Payment', {idTransaction: value.id})} style={{height: 30}} >
                                                    <Text style={{fontStyle: 'italic', ...color.primary}}>
                                                        Pay Now?
                                                    </Text>
                                                </TouchableOpacity>
                                            </Col>
                                        :
                                            null
                                    }
                                    <Col>
                                        <Text style={{...spacing.mlThree, ...spacing.mbTwo, textAlign: 'right'}}>
                                            {value.departureDate}
                                        </Text>
                                    </Col>
                                </Grid>
                                <Grid style={{...spacing.mxFive, alignItems: 'center'}}>
                                    <Col style={{width: 50}}>
                                        <Icon type='FontAwesome' name='location-arrow' />
                                    </Col>
                                    <Col>
                                        <Text style={{color:'grey', ...typography.fsFifteen}}>
                                            From
                                        </Text>
                                        <Text>
                                            {value.from}
                                        </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign: 'right', color:'grey', ...typography.fsFifteen}}>
                                            To
                                        </Text>
                                        <Text style={{textAlign: 'right'}}>
                                            {value.to}
                                        </Text>
                                    </Col>
                                </Grid>
                                <View style={{...spacing.mxFive, ...spacing.mbTwo, ...spacing.mtTwo}}>
                                    <Text>
                                        {value.name}
                                    </Text>
                                </View>
                            </View>  
                        )
                    })
                    
                :
                    null
            }
            </Content>
        </Container>
        
    )
}

const mapDispatchToProps = {
    getPurchaseHistory
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        purchaseHistory: state.transaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory)