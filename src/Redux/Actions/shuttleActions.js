import Axios from 'axios'
import {linkAPI} from '../../Support/Constants/linkAPI'

export const getShuttleLists = (departure, arrival) =>{
    return(dispatch) => {
        Axios.get(`http://10.0.2.2:2000/shuttles?from=${departure}&to=${arrival}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_LIST_SUCCESS',
                    payload: res.data
                },
                
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'GET_DATA_LIST_FAILED',
                    payload: err
                }
            )
        })

    }
}

export const getShuttleDetail = (id) => {
    return(dispatch) => {
        Axios.get(`http://10.0.2.2:2000/shuttles/${id}`)
        .then((resp) => {
            let data = resp.data
            
            Axios.get(`http://10.0.2.2:2000/facility`)
            .then((response) => {
                let detailFacility = response.data

                let arrFacility = []
                for(let i=0; i< detailFacility.length; i++){
                    if(data.facility.includes(detailFacility[i].id)){
                        arrFacility.push(detailFacility[i])
                    }
                }

                data.facility = arrFacility

                dispatch(
                    {
                        type: 'GET_DETAILS_SUCCESS',
                        payload: data
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const getSeatBooked = (idShuttle, departureDate) => {
    return(dispatch) => {
        Axios.get(`http://10.0.2.2:2000/transactions?idShuttle=${idShuttle}&departureDate=${departureDate}&status=Paid&status=Unpaid`)
        .then((res) => {
            let data = res.data
            console.log(data)

            let seatBooked = []
            for(let i=0; i< data.length; i++){
                console.log(data[i].seat)
                for(let j=0; j< data[i].seat.length; j++){
                    seatBooked.push(data[i].seat[j])
                }
            }
            
            dispatch(
                {
                    type: 'GET_SEAT_BOOKED',
                    payload: seatBooked
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })

    }
}