import React from 'react';
import { View,Text,ScrollView,StyleSheet,Image } from 'react-native';


const mouse=({navigation})=>{
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m2.jpg')} />   
                     <Text style={styles.text1}>Dell</Text>
                     <Text style={styles.text}>Range(400)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m3.jpg')} />   
                     <Text style={styles.text1}>hp</Text>
                     <Text style={styles.text}>Range(600)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m4.jpg')} />   
                     <Text style={styles.text1}>B-tec</Text>
                     <Text style={styles.text}>Range(600)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m5.jpg')} />   
                     <Text style={styles.text1}>Acc</Text>
                     <Text style={styles.text}>Range(900))</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m6.jpg')} />   
                     <Text style={styles.text1}>cloudy</Text>
                     <Text style={styles.text}>Range(850)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/m4.jpg')} />   
                     <Text style={styles.text1}>B-tec</Text>
                     <Text style={styles.text}>Range(600)</Text>
                </View>
                
                </ScrollView>
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
    margin:10
    },
    container:{
        padding:10,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        borderRadius:10
    
    },
    inner:{
        flexDirection:'row',
        padding:10,
        margin:10,
        backgroundColor:'#00bcd4',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:10,
        borderRadius:35
        
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
    text1:{
        color:'black',
        textTransform:'bold',
        fontSize:20,
        borderRadius:10,
        width:125,
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

export default mouse;
