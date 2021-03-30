import { Button, Body, Col, Content, Form, Grid, Header, Input, Item, Label, Picker, Title, Left, Right, Container, Accordion } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import RNDateTimePicker from 'react-native-datepicker'
import Collapsible from 'react-native-collapsible';

import spacing from './../../Support/Styles/spacing'
import color from './../..//Support/Styles/color'

import {onSetArrival} from './../../Redux/Actions/FilterAction'
import {onSetDeparture} from './../../Redux/Actions/FilterAction'
import {onSetSeat} from './../../Redux/Actions/FilterAction'
import {onSetDate} from './../../Redux/Actions/FilterAction'
import { connect } from 'react-redux'

const Home = ({navigation:{navigate}, onSetArrival, onSetDeparture, onSetDate, onSetSeat, filter}) => {

    const [jumlahSeat, setJumlahSeat] = useState('1')
    const [error, setError] = useState('')
    
    useEffect(() => {
        onSetSeat(jumlahSeat)
    }, [])

    const submitFilter= () => {
        if(filter.departure === null || filter.arrival === null || filter.date === null){
            setError('Kamu belum mengisi semua inputan')
        }else{
            // onSetDate(tanggal)
            // onSetSeat(jumlahSeat)
            setError('')
            navigate('ShuttleList', {data: filter})
        }
        
    }

    const pushSeat = (itemValue) => {
        setJumlahSeat(itemValue)
        onSetSeat(itemValue)
    }

    const dataArray = [
        { title: "Askumboyceksound", content: 'testing12'},
        { title: 'Askumboyceksound2', content: 'testing124'}
    ]

    return(
        <Content>
            
            <Header style={{backgroundColor: 'white'}}>   
                <Body style={{alignItems: 'center'}}>
                    <Title style={{color: 'black'}}>Bus App</Title>
                </Body> 
            </Header>

            <View style={{...spacing.mFive, backgroundColor: 'white', borderRadius: 3, elevation: 1}}>
               <Form>
                   <Item stackedLabel>
                       <Label>Mulai Dari</Label>
                       <Input onChangeText={onSetDeparture}/>

                   </Item>
               </Form>
               <Form>
                   <Item stackedLabel>
                       <Label>Kota Tujuan</Label>
                       <Input onChangeText={onSetArrival}/>
                   </Item>
               </Form>
            </View>
            <Grid style={{...spacing.mFive, backgroundColor: 'white', borderRadius: 3, elevation: 1}}>
                <Col>
                    <Form>
                        <Item stackedLabel>
                            <Label>Tanggal Perjalanan</Label>
                            <RNDateTimePicker
                                style={{width: 200, marginTop: 10}}
                                date={filter.date}
                                minDate={new Date()}
                                mode="date"
                                placeholder="Pilih Tanggal"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: 20
                                },
                                dateInput: {
                                    marginLeft: 0,
                                    marginTop: -10,
                                    borderWidth: 0
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {onSetDate(date)}}
                            />
                        </Item>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Item stackedLabel>
                            <Label>Jumlah Seat</Label>
                            <Picker
                                placeholder='Jumlah Seat'
                                selectedValue={jumlahSeat}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue) => pushSeat(itemValue)}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                            </Picker>

                        </Item>
                    </Form>
                </Col>
            </Grid>
            <View style={{...spacing.mbThree, ...spacing.mxFive}}>
                {
                    error?
                        <Text style={{color: 'red', textAlign:'center', ...spacing.mbTwo}}>
                            {error}
                        </Text>
                    :
                        null
                }
                <Button onPress={submitFilter} rounded info style={{width: '100%', ...color.bgSecondary}}>
                    <Text style={{color: 'black', width: '100%', textAlign: 'center'}}>
                        Cari Bus
                    </Text>                        
                </Button>
            </View>
            
        </Content>

    )
}

const mapDispatchToProps = {
    onSetArrival, onSetDeparture, onSetDate, onSetSeat
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)