export const onSetDeparture = (input) => {
    return(
        {
            type: 'ON_SET_DEPARTURE',
            payload: input
        }
    )
}

export const onSetArrival = (input) => {
    return(
        {
            type: 'ON_SET_ARRIVAL',
            payload: input
        }
    )
}

export const onSetDate = (input) => {
    return(
        {
            type: 'ON_SET_DATE',
            payload: input
        }
    )
}

export const onSetSeat = (input) => {
    return(
        {
            type: 'ON_SET_SEAT',
            payload: input
        }
    )
}