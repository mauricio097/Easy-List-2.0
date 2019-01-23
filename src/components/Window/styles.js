import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    modal:{
        alignItems: 'center'
    },
    viewModal:{
        height: 360, 
        width: 300,                
    },
    modalHeader:{
        flex:2,        
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,        
    },
    modalContent:{
        flex:9,
        backgroundColor: 'white',        
    },
    modalFooter:{
        flex:2,
        flexDirection:'row',                                   
    },
    title:{        
        fontSize: 20,
        marginTop: 15
    },
    input:{
        marginHorizontal: 13,
        marginTop: 20,
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius:20
    },
    quantView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginHorizontal: 10
    },
    picker:{
        marginTop:10
    },
    textButton: {
        color:'#FFF',
        fontSize: 15
    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',    
    },
    buttonLight:{
        backgroundColor: Colors.secondary,
        borderBottomLeftRadius: 20          
    },
    buttonDark:{
        backgroundColor: Colors.secondaryDark,
        borderBottomRightRadius: 20,         
    }
});

export default styles;