//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CityLocation = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cityname}>Australia</Text>
      </View>
      <View>
        <Text style={styles.latitudelongitude}>4.22N 50E</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  cityname: {
    fontSize: 45,
    color: 'white',
    fontWeight: '300',
    paddingTop: 30,
  },
  latitudelongitude: {
    fontSize: 15,
    color: 'white',
  }
});

//make this component available to the app
export default CityLocation;
