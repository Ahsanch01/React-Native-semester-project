import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';


const charger=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            
                <View style={styles.inner} >
                        <View style={styles.text1}>
                            <Text style={styles.heading} >Shop Name: </Text>
                            <Text style={styles.subh}>AJ Accessories</Text>
                            <Text style={styles.heading} >Address: </Text>
                            <Text style={styles.subh}>M3 main hafeez center lahore</Text>
                            <Text style={styles.heading} >Emial: </Text>
                            <Text style={styles.subh}>Ajaccessories@gmial.com</Text>
                            <Text style={styles.heading} >Contact: </Text>
                            <Text style={styles.subh}>03134162172</Text>
                        </View>
                     
                    
                </View>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        // backgroundColor:'grey',
       padding:30,
    //    backgroundColor:'yellow'
    backgroundColor:'#00bcd4',
    margin:10,
    height:"100%"
    },
    container:{
        padding:10,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        height:"100%"
    },
    inner:{
        flexDirection:'row',
        padding:10,
        margin:10,
        backgroundColor:'#00bcd4',
        justifyContent:'Center',
        
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:10,
        borderRadius:35,
        height:"80%"
    },
    image:{
        width:100,
        height:100
    },
    text:{
        color:'black',
        
        textTransform:'bold',
        fontSize:20,
        borderRadius:10,
        width:150,
        padding: 5,
        backgroundColor:'white',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    },
    heading:{
        fontWeight:'bold'
    },
    subh:{
        paddingTop:10,
        paddingLeft:20
            },
    text1:{
        textTransform:'capitalize',
        textDecorationStyle:'double',
        color:'black',
        textTransform:'bold',
        fontSize:20,
        borderRadius:10,
        width:300,
        padding: 5,
        backgroundColor:'white',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10,
        shadowColor:'black',
        
        
        
    }
    

} );

export default charger;
