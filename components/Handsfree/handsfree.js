import React from 'react';
import { View,Text,ScrollView,StyleSheet,Image } from 'react-native';


const handsfree=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf1.jpg')} />   
                     <Text style={styles.text1}>Realme</Text>
                     <Text style={styles.text}>Range(300)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf32.jpg')} />   
                     <Text style={styles.text1}>cloud</Text>
                     <Text style={styles.text}>Range(450)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf3.jpg')} />   
                     <Text style={styles.text1}>Speaker</Text>
                     <Text style={styles.text}>Range(500)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf4.jpg')} />   
                     <Text style={styles.text1}>Dj</Text>
                     <Text style={styles.text}>Range(300)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf5.jpg')} />   
                     <Text style={styles.text1}>Chadhar</Text>
                     <Text style={styles.text}>Range(550)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/hf6.jpg')} />   
                     <Text style={styles.text1}>Zada</Text>
                     <Text style={styles.text}>Range(650)</Text>
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

export default handsfree;
