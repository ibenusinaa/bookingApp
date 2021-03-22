const { StyleSheet } = require('react-native');

const primary = '#28527a'
const secondary = '#f4d160'
const light = '#bbbbbb'
const dark = '#1e212d'
const link = '#3366BB'

const color = StyleSheet.create({
    bgPrimary: {backgroundColor: primary},
    primary: {color: primary},
    
    bgSecondary: {backgroundColor: secondary},
    secondary: {color: secondary},

    bgLight: {backgroundColor: light},
    light: {color: light},

    bgDark: {backgroundColor: dark},
    dark: {color: dark},

    link: {color: link},

    bRadiusOne : {
        borderRadius : 10
    },
    bRadiusTwo : {
        borderRadius : 20
    },
    bRadiusThree : {
        borderRadius : 30
    },
    bRadiusFour : {
        borderRadius : 40
    },
    bRadiusFive : {
        borderRadius : 50
    }
})

export default color