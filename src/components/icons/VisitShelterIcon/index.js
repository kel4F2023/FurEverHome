import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import scheduleIcon from '../../../../assets/navbar-icons/visit-shelter-icon.png';

const VisitShelterIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={scheduleIcon} style={styles.icon} />
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

export default VisitShelterIcon;