import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import checkPetIcon from '../../../../assets/navbar-icons/check-pet-icon.png'; 
const CheckPetIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={checkPetIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
  },
});

export default CheckPetIcon; 