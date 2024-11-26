import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VisitShelterHome() {
  return (
    <View style={styles.container}>
      <Text>Visit Shelter</Text>
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