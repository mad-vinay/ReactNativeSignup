import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    signupWrapper: {
        padding: 50,
        flexDirection: 'column',
        height: HEIGHT,
        justifyContent: 'center',
        width: WIDTH,
    },
    signuptButton: {
        borderRadius: 5,
        backgroundColor: '#34A853',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    header: {
        justifyContent: 'center',
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        backgroundColor: '#000'
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 20, 
    },
    textInputStyle: {
        height: 50,
        backgroundColor: '#f4f4f4',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        paddingLeft: 15,
        borderColor: 'red',
        borderWidth: 0,
    },
    error: {
        borderWidth: 1,
        borderColor: 'red',
        height: 50,
        backgroundColor: '#f4f4f4',
        marginBottom: 12,
        borderRadius: 5,
        paddingLeft: 15,
    },
    errMsg: {
        color: 'red',
    }
});

