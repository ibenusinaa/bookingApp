import { Body, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text, Icon, Form, Col, Button, Toast } from 'native-base'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
// Styles
import spacing from '../../Support/Styles/spacing'
import typography from '../../Support/Styles/typography'
import color from '../../Support/Styles/color'
import { connect } from 'react-redux'
import moment from 'moment'
import Axios from 'axios'

import {linkAPI} from '../../Support/Constants/linkAPI'
import {getPurchaseHistory, getExpiredAt} from '../../Redux/Actions/TransactionAction'


const BookingDetail = ({route, navigation: {navigate}, navigation, user, filter, getPurchaseHistory, getExpiredAt}) => {

    const [selectedSeat, setSelectedSeat] = useState([])
    const [passenger, setPassenger] = useState([])
    const [kontakUser, setKontakUser] = useState(
        {
            email: null,
            phoneNumber: null
        }
    )

    useEffect(() => {
        setSelectedSeat(route.params.seat)
        console.log(route.params)

        let selectedSeat = route.params.seat
        let newArr = []

        for(let i = 0; i< selectedSeat.length; i++){
            newArr.push(
                {
                    seat: selectedSeat[i],
                    nama: null,
                    umur: null
                }
            )
        }

        setPassenger(newArr)
    }, [])

    const dataPassenger = (input, seatNumber, inputType) => {
        console.log(seatNumber)
        console.log(input)
        console.log(inputType)
        let arrPassenger = [...passenger]

        for(let i =0; i<arrPassenger.length; i++){
            if(arrPassenger[i].seat === seatNumber){
                if(inputType === 'nama'){
                    arrPassenger[i].nama = input
                }else if(inputType === 'umur'){
                    arrPassenger[i].umur = input
                }
            }
        }
        setPassenger(arrPassenger)
    }

    const onCheck = () => {
        console.log(passenger)
    }

    const onPayment = () => {
        // Tugas 1 : Buat validasi untuk data informasi penumpang (Pastikan semua data lengkap)

        // idShuttle : route.params.idShuttle 
        //  status : 'Unpaid'
        //  idUser : Global Store ---> User
        //  name : route.params.name
        // class : route.params.class
        //  from : Global Store ---> Filter
        // to : Global Store ---> Filter
        // departureDate : Global Store ---> Filter
        // seat : selectedSeat (state)
        // detailPassenger : passenger (state)
        // totalPrice : route.params.price
        let expiredAt = moment(new Date()).add({seconds: 20}).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')
        let now = moment(new Date()).utcOffset('+07.00').format('YYYY-MM-DD HH:mm:ss')
        let different = moment.duration(moment(expiredAt).diff(moment(now)))

        let seconds = different.asSeconds()


        

        let dataToSend = {
            idShuttle: route.params.idShuttle,
            status: 'Unpaid',
            expiredAt: expiredAt,
            idUser: user.id,
            name: route.params.name,
            class: route.params.class,
            from: filter.departure,
            to: filter.arrival,
            departureDate: filter.date,
            seat: selectedSeat,
            detailPassenger: passenger,
            totalPrice: route.params.price
        }
        for(let i = 0; i<passenger.length; i++){
            if(passenger[i].nama === null || passenger[i].umur === null || kontakUser.email === null || kontakUser.phoneNumber === null){
                Toast.show({
                    text: `Kamu belum mengisi semua data`,
                    buttonText: 'Sip',
                    duration: 4000
                })
            }else{
                getExpiredAt(seconds)
                Axios.post(linkAPI + '/transactions', {...dataToSend} )
                .then((res) => {
                    getPurchaseHistory(user.id)
                    navigate('Payment', {idTransaction: res.data.id})
                })
                .catch((err) => {
                    console.log(err)
                })
                break
            }
            console.log(passenger)
            console.log(kontakUser)
        }
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...color.bgSecondary}}>
                <Left>
                    <Icon type='FontAwesome5' name='arrow-left' onPress={() => navigation.goBack()} />
                </Left>
                <Body>
                    <Text style={{...typography.fsFive, ...spacing.mlFive, fontWeight: 'bold'}}>
                        Booking Details
                    </Text>
                </Body>
            </Header>
            <Content>
                <View style={{...spacing.pxFive, ...spacing.mtFive}}>

                    <Text style={{...typography.fsFive, fontWeight: 'bold'}}>
                        Informasi Kontak
                    </Text>
                    <View style={{backgroundColor: 'white', borderWidth: 0.3, borderColor: 'grey', borderRadius: 3, elevation: 5, ...spacing.mtTwo}}>
                        <Form>
                            <Item stackedLabel>
                                <Label style={{...color.dark}} style={{...color.dark}}>Email</Label>
                                <Input placeholder={user.email} style={{width: '100%'}} onChangeText={(input) => setKontakUser({...kontakUser, email: (input)})} />
                            </Item>
                        </Form>
                    
                    
                        <Form style={{...spacing.mbTwo}}>
                            <Item stackedLabel>
                                <Label style={{...color.dark}}>Phone Number</Label>
                                <Input style={{width: '100%'}} onChangeText={(input) => setKontakUser({...kontakUser, phoneNumber: (input)})} />
                            </Item>
                        </Form>
                    </View>
                    {/* <View>
                        <Button onPress={onCheck}>
                            <Text>
                                Check
                            </Text>
                        </Button>
                    </View> */}
                </View>
                <View style={{...spacing.pxFive, ...spacing.mtSeven}}>
                    <Text style={{...typography.fsFive, fontWeight: 'bold'}}>
                        Informasi Penumpang
                    </Text>
                </View>
                {
                    selectedSeat.map((value, index) => {
                        return(
                            <View key={index} style={{...spacing.mxFive, ...spacing.myOne}}>
                                <Grid>
                                    <Col>
                                        <Text>
                                            Penumpang {index + 1}
                                        </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign: 'right', width: '100%', fontWeight: 'bold'}}>
                                            Seat : {value}
                                        </Text>
                                    </Col>
                                   
                                </Grid>
                                <View style={{backgroundColor: 'white', borderWidth: 0.3, borderColor: 'grey', borderRadius: 3, elevation: 5, ...spacing.mtOne}}>
                                    <Form>
                                        <Item stackedLabel>
                                            <Label style={{...color.dark}}>Nama</Label>
                                            <Input onChangeText={(input) => dataPassenger(input, value, 'nama')}/>
                                        </Item>
                                    </Form>
                                    
                                    
                                    <Form style={{...spacing.mtTwo}}>
                                        <Item stackedLabel >
                                            <Label style={{...color.dark}}>Umur</Label>
                                            <Input onChangeText={(input) => dataPassenger(input, value, 'umur')}/>
                                        </Item>
                                    </Form>
                                </View>            
                            </View>
                        )
                    })
                }
                <View style={{...spacing.mFive}}>
                    <Button block onPress={onPayment}>
                        <Text>
                            Lanjutkan ke Pembayaran
                        </Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getPurchaseHistory, getExpiredAt
}

const mapStateToProps = (state) => {
    return{
        user:  state.user,
        filter: state.filter
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)