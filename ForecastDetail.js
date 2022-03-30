//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import FutureForecast from './FutureForecast'

// create a component
const WeatherItem = ({title, value, unit}) => {
  return (
    <View style={styles.othercontainer}>
      <Text style={styles.textcolor}>{title}</Text>
      <Text style={styles.textcolor}>{value}{unit}</Text>
    </View>
  )
}
const ForecastDetail = () => {
  return (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/thermometer.png')} style={styles.image}/>
        <WeatherItem title="High/Low" value="10&#176;/7&#176;" unit="C"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/wind.png')} style={styles.image}/>
        <WeatherItem title="  Wind  " value="6" unit="mph"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/humidity.png')} style={styles.image}/>
        <WeatherItem title="Humidity" value="79" unit="%"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/barometer.png')} style={styles.image}/>
        <WeatherItem title="Pressure" value="1000" unit="hPA"/>
      </View>
    </View>
    <View>
      <FutureForecast/>
    </View>
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 25,
    backgroundColor: '#18181bcc',
  },
  othercontainer: {
    alignItems: 'center',
    padding: 25,
  },
  textcolor: {
    color: 'white',
  },
  image: {
    alignSelf: 'center',
    marginTop: 25,
  },
});

//make this component available to the app
export default ForecastDetail;
