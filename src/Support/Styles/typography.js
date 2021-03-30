const { StyleSheet } = require ('react-native')

const One = 10
const Two = 12
const Three = 15
const Four = 16
const Five = 18
const Six = 20
const Seven = 24
const Eight = 28
const Nine = 30

const typography = StyleSheet.create({
    fsTen: {fontSize: One},
    fsTwelve: {fontSize: Two},
    fsFifteen: {fontSize: Three},
    fsSixteen: {fontSize: Four},
    fsEighteen: {fontSize: Five},
    fsTwenty: {fontSize: Six},
    fsTwentyFour: {fontSize: Seven},
    fsTwentyEight: {fontSize: Eight},
    fsThirty: {fontSize: Nine},

    fsBold: {fontWeight: 'bold'}
})

export default typography