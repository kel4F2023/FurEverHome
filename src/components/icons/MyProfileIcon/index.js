import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import myProfileIcon from '../../../../assets/navbar-icons/my-profile-icon.png'; // Update with the correct path

const MyProfileIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={myProfileIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default MyProfileIcon; 