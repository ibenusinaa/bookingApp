import { Button, Col, Container, Content, Grid, Icon, Row, Toast } from 'native-base'
import React, {useEffect, useState} from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

import spacing from '../../Support/Styles/spacing'
import typography from '../../Support/Styles/typography'
import color from '../../Support/Styles/color'

import {getShuttleDetail, getSeatBooked} from '../../Redux/Actions/shuttleActions'
import { connect } from 'react-redux'

const shuttleDetail = ({route, getShuttleDetail, getSeatBooked, shuttle, navigation, filter, navigation: {navigate}}) => {

    useEffect(() => {
        let id = route.params.data
        getShuttleDetail(id)
        getSeatBooked(id, filter.date)
        
    },[])

    const [selectedSeat, setSelectedSeat] = useState([])
    // const [error, setError] = useState('')

    const onSelectSeat = (seatNumber) => {
        // Apakah jumlah selected seat < dengan total seat yg di input
        if(selectedSeat.length < filter.seat){
            // apakah seat sudah di select apa belum? kalau sudah:
            if(selectedSeat.includes(seatNumber)){
                // cari dia di index ke berapa di state selectdedseat
                let indexSeat = selectedSeat.indexOf(seatNumber)
                // hapus seatnya pakai splice
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)

                setSelectedSeat(arrSelectedSeat)
    
            }else{
                setSelectedSeat([...selectedSeat, seatNumber])
            }
        }else{
            if(selectedSeat.includes(seatNumber)){
                // cari dia di index ke berapa di state selectdedseat
                let indexSeat = selectedSeat.indexOf(seatNumber)
                // hapus seatnya pakai splice
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)

                // push ke state
                setSelectedSeat(arrSelectedSeat)
                // setError('')
            }else{
                // setError('Total seat yang bisa dipilih' + filter.seat)
                Toast.show({
                    text: `Total seat yang bisa dipilih hanya ${filter.seat}`,
                    buttonText: 'Sip',
                    duration: 4000
                })
            }
        }
    }

    const onCheckout = () => {
        console.log('masuk')
        navigate('BookingDetail', {seat: selectedSeat, price: selectedSeat.length * shuttle.shuttleDetail.price,
        idShuttle: route.params.data, name: shuttle.shuttleDetail.name, class: shuttle.shuttleDetail.class})

    }
    return(
        <Container>
            <Content>
                {
                    shuttle.shuttleDetail?   
                        <View>
                            <Icon  type='FontAwesome5' name='arrow-left' style={{position: 'absolute', zIndex: 3, ...spacing.mFive}} onPress={() => navigation.goBack()} />
                            <Grid>
                                <Col style={{width: 250, height:200}}>
                                    <Image 
                                        source ={{uri: shuttle.shuttleDetail.image1}}
                                        style={{width: '100%', height: 200}} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Image 
                                        source ={{uri: shuttle.shuttleDetail.image2}} 
                                        style={{width: '100%', height: 100}} />
                                    </Row>
                                    <Row>
                                        <Image 
                                            source ={{uri: shuttle.shuttleDetail.image3}} 
                                            style={{width: '100%', height: 100}} />
                                    </Row>
                                </Col>
                                
                            </Grid>
                            <Grid style={{...spacing.mFive, borderBottomWidth: 0.8, borderBottomColor: 'grey'}}>
                                <Col style={{...spacing.mbFive}}>
                                    
                                    <View>
                                        <Text>
                                            {shuttle.shuttleDetail.type}
                                        </Text>
                                        <Text style={{...typography.fsBold, ...typography.fsEighteen}}>
                                            {shuttle.shuttleDetail.name}
                                        </Text>
                                        <Text>
                                            {shuttle.shuttleDetail.class}
                                        </Text>
                                        <Grid style={{...spacing.mtThree}}>
                                            <Col>
                                                <Text>
                                                    {shuttle.shuttleDetail.from}
                                                </Text>
                                                <Text style={{...typography.fsBold}}>
                                                    07.30
                                                </Text>
                                            </Col>
                                            <Col style={{width: 30}}>
                                                <Icon type='FontAwesome' name='long-arrow-right' style={{fontSize: 20}}/>
                                            </Col>
                                            <Col>
                                                <Text>
                                                    {shuttle.shuttleDetail.to}
                                                </Text>
                                                <Text style={{...typography.fsBold}}>
                                                    12.00
                                                </Text>
                                            </Col>
                                        </Grid>

                                    </View>
                                </Col>
                                <Col style={{alignItems: 'flex-end', ...spacing.mbFive}}>
                                    <Icon type='FontAwesome' name='star' style={{...color.secondary, ...typography.fsTwentyFour}} />
                                    <Text style={{...typography.fsBold, ...typography.fsSixteen}}>
                                        Rp{shuttle.shuttleDetail.price}
                                    </Text>
                                </Col>
                            </Grid>
                            <View style={{...spacing.mxFive, borderBottomWidth: 0.8, borderBottomColor: 'grey'}}>
                                <Text style={{...typography.fsBold, ...typography.fsEighteen}}>
                                    Fasilitas
                                </Text>
                                <Grid style={{flexWrap: 'wrap', justifyContent: 'space-around'}}>
                                    {
                                        shuttle.shuttleDetail.facility.map((value, index) => {
                                            return(
                                                <Col key={index} style={{alignItems: 'center',  width: 60, ...spacing.myTwo}}>
                                                    <Icon type='FontAwesome5' name={value.image}/>
                                                    <Text style={{textAlign: 'center'}}>
                                                        {value.facility}
                                                    </Text>
                                                </Col>
                                            )
                                        })
                                    }
                                </Grid>
                            </View>
                            <View style={{...spacing.mFive}}>
                                <Text style={{...typography.fsBold, ...typography.fsEighteen}}>
                                    Pilih Kursi
                                </Text>
                                {/* <Text style={{color: 'red'}}>
                                    {error}
                                </Text> */}
                                <View style={{...spacing.mFive}}>
                                    <Grid style={{...spacing.pxFive, ...spacing.mtTwo, flexWrap: 'wrap'}}>
                                        {
                                            shuttle.shuttleDetail.seat.map((value, index) => {
                                                return(
                                                    shuttle.seatBooked.includes(value)?
                                                        <Col key={index} style={{width: '25%', ...spacing.mbTwo, alignItems: 'center'}}>
                                                            <Icon type='Ionicons' name='person' style={{fontSize: 25}} />
                                                            <Text style={{textAlign: 'center'}}>
                                                                Booked
                                                            </Text>
                                                        </Col>
                                                    :
                                                        <>
                                                            {
                                                                    <TouchableOpacity key={index} onPress={() => onSelectSeat(value)}  style={{width: '25%', ...spacing.mbTwo, alignItems: 'center'}}>
                                                                        <Icon 
                                                                            type='Ionicons' name={selectedSeat.includes(value)? 'person' : 'person-outline'} 
                                                                            
                                                                            style={{fontSize: 25, color: selectedSeat.includes(value)? 'grey' : 'black'}} />
                                                                        <Text style={{textAlign: 'center'}}>
                                                                            {value}
                                                                        </Text>
                                                                    </TouchableOpacity >                                
                                                            }
                                                        </>
                                                )
                                            })
                                        }
                                    </Grid>
                                </View>
                            </View>
                            {
                                selectedSeat.length !== 0?
                                    <View style={{...color.bgSecondary}}>
                                        <Grid style={{...spacing.mxThree, alignItems:'center'}}>
                                            <Col style={{alignItems: 'center'}}>
                                                <Text>
                                                    Seat:
                                                    
                                                    {
                                                        selectedSeat.map((value, index) => {
                                                            return(
                                                                <Text key={index} style={{...typography.fsFour}}>
                                                                    {value}  
                                                                </Text>
                                                            )
                                                        })
                                                    }
                                                </Text>

                                            </Col>
                                            <Col style={{alignItems: 'center'}}>
                                                <Text>
                                                    Rp {
                                                        selectedSeat.length * shuttle.shuttleDetail.price
                                                    }
                                                </Text>
                                            </Col>
                                            <Col style={{...spacing.myTwo, ...spacing.mlThree}}>
                                                <Button onPress={onCheckout} rounded info style={{width: 100}}>
                                                    <Text style={{width: '100%', textAlign: 'center'}}>
                                                        Checkout
                                                    </Text>
                                                </Button>
                                            </Col>
                                        </Grid>
                                    </View>
                                :
                                     null
                                
                            }

                        </View>
                            
                        
                    :
                        <Text>
                            Loading
                        </Text>
                }
                
            </Content>

        </Container>
    )
}

const mapDispatchToProps = {
    getShuttleDetail,
    getSeatBooked
}

const mapStateToProps = (state) => {
    return{
        shuttle: state.shuttle,
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(shuttleDetail)