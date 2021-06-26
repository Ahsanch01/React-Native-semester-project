import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const footer=()=>{
    return(
            <View style={styles.foot}>
                <Text style={styles.footitem}>AJ.Accessories  M3-shope Abid market lahore</Text>
                
            </View>
    );
};
const styles=StyleSheet.create({
    foot:{
        backgroundColor:'#00bcd4',
        padding:10,
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:30,
       alignItems:'center'


    },
    footitem:{
        color:'black',
        backgroundColor:'white',
        padding:7,
        fontWeight:'bold',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        


    }
})
export default footer;