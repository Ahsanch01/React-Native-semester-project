import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const header=(props )=>{
    return(
                <View style={styles.header}>
                    <Text style={styles.headerTitle} >{props.title}</Text>
                    <Image style={styles.image} source={require('../assets/Group 1.png')} />

                </View>

    );
};

const styles=StyleSheet.create({
    header:{
        
        flexDirection:'row',
        width:'100%',
        height:90,
        backgroundColor:'#00bcd4',
        alignItems:'center',
        justifyContent:"space-around",
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:30,
        
        
    },
    image:{
        width:100,
        height:80
    },
    headerTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        borderRadius:10,
        
        padding: 5,
        backgroundColor:'white',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    }

});

export default header;