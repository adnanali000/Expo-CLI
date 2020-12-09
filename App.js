import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{url:"https://media.zigcdn.com/media/content/2020/Jun/2020-iron-883-motorcycle-g2.jpg"}} style={{width:300, height:230}} />
      <Text style={{color:'#888',fontSize:20}} style={styles.Text}>
        Hello World.
        This is my first expo app
      </Text>
      <Image source={logo} style={styles.logo} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:50,
    height:50,
    marginTop:10
  },
  Text:{
    margin:10,
    fontSize:20
  }

});
