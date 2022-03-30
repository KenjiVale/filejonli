//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const img = { uri: 'http://openweathermap.org/img/wn/10d@2x.png' }

const ForecastPart = () => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}></Image>
      <View>
        <Text style={styles.tmpstyle}>20&#176;C</Text>
      </View>
      <View>
        <Text style={styles.weatherdesc}>Rainy</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  tmpstyle: {
    fontSize: 50,
    color: 'white',
    fontWeight: '300',
  },
  weatherdesc: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
  }
});

//make this component available to the app
export default ForecastPart;
