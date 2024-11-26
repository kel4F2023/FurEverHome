import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import careLogsIcon from '../../../../assets/navbar-icons/care-logs-icon.png'; // Update with the correct path

const CareLogsIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={careLogsIcon} style={styles.icon} />
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

export default CareLogsIcon; 