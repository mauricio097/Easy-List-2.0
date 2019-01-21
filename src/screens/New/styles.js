import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { Col } from 'native-base';

const styles = StyleSheet.create({
    bar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#c4c3c9',
        backgroundColor: '#f6f6f6',
    },
    inputBar: {
        height: 45,
        flex:1
    },
    buttonbar: {
        height: 45,
        backgroundColor: Colors.secondary
    },
    disableButton: {
        backgroundColor: '#b5b5b5'
    }
});

export default styles;