import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import logoIcon from '../../../../assets/logo.png'; // Update with the correct path

const LogoIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={logoIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default LogoIcon; 