import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CheckPetHome() {
  return (
    <View style={styles.container}>
      <Text>Check Pet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 