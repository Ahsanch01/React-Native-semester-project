import React from 'react';
import { View,Text,ScrollView,StyleSheet,Image } from 'react-native';


const charger=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l1.jpg')} />   
                     <Text style={styles.text1}>Dell</Text>
                     <Text style={styles.text}>Range(2300)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l2.jpg')} />   
                     <Text style={styles.text1}>hp</Text>
                     <Text style={styles.text}>Range(1700)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l3.jpg')} />   
                     <Text style={styles.text1}>Acc</Text>
                     <Text style={styles.text}>Range(2500)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l4.jpg')} />   
                     <Text style={styles.text1}>Tink</Text>
                     <Text style={styles.text}>Range(1500)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l5.jpg')} />   
                     <Text style={styles.text1}>PAID</Text>
                     <Text style={styles.text}>Range(1300)</Text>
                </View>
                <View style={styles.inner}>
                     <Image style={styles.image} source={require('../../assets/l6.jpg')} />   
                     <Text style={styles.text1}>M-tec</Text>
                     <Text style={styles.text}>Range(2000)</Text>
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

export default charger;
