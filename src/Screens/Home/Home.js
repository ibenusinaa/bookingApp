import { Button, Body, Col, Content, Form, Grid, Header, Input, Item, Label, Picker, Title, Left, Right } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.development'
import DatePicker from 'react-native-datepicker'

import spacing from './../../Support/Styles/spacing'
import color from './../..//Support/Styles/color'

const Home = () => {

    const [jumlahSeat, setJumlahSeat] = useState('1')
    const [tanggal, setTanggal] = useState(new Date())

    return(
        <Content>
            <View style={{...spacing.mFive, backgroundColor: 'white'}}>
               <Form>
                   <Item stackedLabel>
                       <Label>Mulai Dari</Label>
                       <Input />

                   </Item>
               </Form>
               <Form>
                   <Item stackedLabel>
                       <Label>Kota Tujuan</Label>
                       <Input />
                   </Item>
               </Form>
            </View>
            <Grid style={{...spacing.mFive, backgroundColor: 'white'}}>
                <Col>
                    <Form>
                        <Item stackedLabel>
                            <Label>Tanggal Perjalanan</Label>
                            <DatePicker
                                style={{width: 200, marginTop: 10}}
                                date={tanggal}
                                minDate={new Date()}
                                mode="date"
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
                                onDateChange={(date) => {setTanggal(date)}}
                            />
                        </Item>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Item stackedLabel>
                            <Label>Jumlah Seat</Label>
                            <Picker
                                selectedValue={jumlahSeat}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setJumlahSeat(itemValue)}
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
            <View style={{...spacing.mThree}}>
                <Button rounded info style={{width: '100%', ...color.bgSecondary}}>
                    <Text style={{color: 'black', width: '100%', textAlign: 'center'}}>
                        Cari Bus
                    </Text>                        
                </Button>
            </View>
            
        </Content>

    )
}

export default Home