import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Visit Shelter"
        onPress={() => navigation.navigate('Tabs', { screen: 'Visit Shelter' })}
      />
      <Button
        title="Check Pets"
        onPress={() => navigation.navigate('Tabs', { screen: 'Check Pet' })}
      />
      <Button
        title="Care Logs"
        onPress={() => navigation.navigate('Tabs', { screen: 'Care Logs' })}
      />
      <Button
        title="My Profile"
        onPress={() => navigation.navigate('Tabs', { screen: 'My Profile' })}
      />
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