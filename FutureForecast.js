//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


// create a component
const FutureForecast = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>

    </View>
  )
}

const FutureForecastItem = () => {
  const img={uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Mon</Text>
      <Image source={img} style={styles.image}/>
      <Text style={styles.textstyle}>27&#176;C</Text>
      <Text style={styles.textstyle}>Rainy</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000033',
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  textstyle: {
    color: 'white',
  }
});

//make this component available to the app
export default FutureForecast;
