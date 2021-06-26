
import React from 'react';
import { StyleSheet, View,Text,Image, ScrollView} from 'react-native';
import Header from '../Header';

import Footer from '../footer';

const Frontscreen=({navigation})=> {
  return (
    <View style={styles.Screen}>
      <Header title='AJ-Accessories'   />
      <ScrollView>
      <View style={styles.main}>
        
        <View style={styles.container}>
         <View style={styles.inner1}>
         <Text style={styles.text2} onClick={() => navigation.navigate('Details')}>Shop Address</Text>
         </View>
        
          <View style={styles.inner} onClick={() => navigation.navigate('Keyboard')}>
          
                <Image style={styles.image} source={require('../../assets/keyboard.jpg')} />
                 <Text style={styles.text1}>Keyboard</Text>
                 <Text style={styles.text}>Range(600-2300)</Text>
             

          </View>
          <View style={styles.inner} onClick={() => navigation.navigate('Mouse')}>
                 <Image style={styles.image} source={require('../../assets/mouse.jpg')} />
                    <Text style={styles.text1}>Mouse</Text>
                 <Text style={styles.text}>Range(400-1700)</Text>

              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('MousePad')} >
                 <Image style={styles.image} source={require('../../assets/mousepad.jpg')} />
                    <Text style={styles.text1}>Mouse Pad</Text>
                 <Text style={styles.text}>Range(70-300)</Text>

              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('HeadPhone')}>
                 <Image style={styles.image} source={require('../../assets/headphones.jpg')} />
                    <Text style={styles.text1}>HeadPhones</Text>
                 <Text style={styles.text}>Range(800-4500)</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('HandsFree')}>
                 <Image style={styles.image} source={require('../../assets/handsfree.jpg')} />
                    <Text style={styles.text1}>HandsFree</Text>
                 <Text style={styles.text}>Range(300-1200)</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('Charger')}>
                 <Image style={styles.image} source={require('../../assets/charger.jpg')} />
                    <Text style={styles.text1}>Charger</Text>
                 <Text style={styles.text}>Range(1300-5000)</Text>
                 
              </View>
              <View style={styles.inner} onClick={() => navigation.navigate('Usb')}>
                 <Image style={styles.image} source={require('../../assets/usb.jpg')} />
                    <Text style={styles.text1}>Usb</Text>
                 <Text style={styles.text}>Range(300-1200)</Text>
                 
              </View>
              
        </View>
        </View>
        </ScrollView>
      <Footer />
    </View>
  );
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
inner1:{
   flexDirection:'row',
   padding:10,
   margin:10,
   backgroundColor:'#00bcd4',
   justifyContent:'center',
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
    
    
    
},
text2:{
   color:'black',
   textTransform:'bold',
   fontSize:20,
   fontWeight:"bold",
   borderRadius:10,
   width:150,
   padding: 5,
   backgroundColor:'yellow',
   shadowOffset:{width:2,height:2},
   shadowRadius:6,
   shadowOpacity:0.26,
   elevation:8,
   borderRadius:10,
   shadowColor:'black',
   
   
   
}

  
});


export default Frontscreen;