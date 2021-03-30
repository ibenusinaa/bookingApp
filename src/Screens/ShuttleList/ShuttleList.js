import { Body, Button, Header, Col, Content, Grid, Icon, Text, Row, Container } from 'native-base'
import React,{useEffect} from 'react'
import { TouchableOpacity, View } from 'react-native'

import spacing from './../../Support/Styles/spacing'
import color from './../../Support/Styles/color'
import typography from '../../Support/Styles/typography'
import { connect } from 'react-redux'

import {getShuttleLists} from './../../Redux/Actions/shuttleActions'

const ShuttleList = ({filter, route, getShuttleLists, shuttle, navigation: {navigate}}) => {


    useEffect(() => {
        console.log(route.params)
        let arrival = route.params.data.arrival
        let departure = route.params.data.departure
        getShuttleLists(departure, arrival)

    }, [])

    const toShuttleDetails = (id) =>{

        navigate('ShuttleDetails', {data: id})
    }

    if(shuttle.shuttleList === null) {
        return(
            <Text>
                Loading
            </Text>
        )
    }

    return(

        <Container>
            <Header style={{...color.bgSecondary}}>   
                <Body>
                    <Grid>
                        <Row style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                            <Text>
                                {route.params.data.departure}
                            </Text>
                            <Icon type='FontAwesome' name='long-arrow-right' style={{...spacing.mxTwo}}/>
                            <Text style={{...spacing.mrSeven}}>
                                {route.params.data.arrival}
                            </Text>
                                
                            <Text>
                                {route.params.data.date}
                            </Text>
                            <Icon type='FontAwesome' name='user' style={{...typography.fsTwenty, ...spacing.mxTwo}} />
                            <Text>
                                {route.params.data.seat}
                            </Text>
                        </Row>
                        {/* <Col style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      
                        </Col> */}

                    </Grid>
                    
                </Body> 
            </Header>
            <Content>
                {
                    shuttle.shuttleList.length === 0?
                        <View style={{borderRadius:5, elevation: 5, backgroundColor: 'white', ...spacing.pFive, ...spacing.mxOne, ...spacing.mtOne}}>
                             <Text style={{...color.dark}}>
                                Armada tidak ditemukan
                            </Text>
                        </View>
                    :
                        shuttle.shuttleList.map((value, index) => {
                            return(
                                <TouchableOpacity onPress={() => toShuttleDetails(value.id)} key={index} style={{borderRadius:5, elevation: 5, backgroundColor: 'white', ...spacing.pFive, ...spacing.mxOne, ...spacing.mtOne}}>
                                    <Text style={{...color.dark}}>
                                        {value.name}
                                    </Text>
                                    <Grid style={{...spacing.mtTwo}}>
                                        <Col style={{...spacing.mbFive}}>
                                            <Row>
                                                <Text style={{...typography.fsBold, ...spacing.mrOne}}>07.30</Text> 
                                                <Text style={{...color.dark}}>{value.from}</Text>
                                            </Row>
                                            <Icon type='FontAwesome' name='long-arrow-down' style={{...spacing.myOne, ...spacing.mlThree}}/>
                                            <Row>
                                                <Text style={{...typography.fsBold, ...spacing.mrOne}}>12.00</Text> 
                                                <Text style={{...color.dark}}>{value.to}</Text>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Text style={{textAlign: 'right', ...color.primary, ...typography.fsBold}}>
                                                Rp{value.price}/Orang
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <Text style={{...color.dark}}>
                                        {value.class}
                                    </Text>
                                </TouchableOpacity  >
                            )
                        })
                }              
            </Content>
        </Container>
            
    )
}
const mapDispatchToProps = {
    getShuttleLists
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter,
        shuttle: state.shuttle
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleList)