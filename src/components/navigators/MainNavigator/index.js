import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoIcon from '../../icons/LogoIcon';
import HomePage from '../../../screens/HomePage';
import BottomNavBar from '../BottomNavBar';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomePage} 
        options={{ 
          headerShown: false,
          animation: 'slide_from_left', // Home page slides from left
        }} 
      />
      <Stack.Screen 
        name="Tabs" 
        component={BottomNavBar} 
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerStyle: { backgroundColor: '#68949D', height: '5%' },
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <LogoIcon /><Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFF' }}>FurEver Home</Text>
            </TouchableOpacity>
          ),
          animation: 'slide_from_right', // Other pages slide from right
        }} 
      />
    </Stack.Navigator>
  );
}