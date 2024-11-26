import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VisitShelterHome from '../../../screens/VisitShelter';
import CheckPetHome from '../../../screens/CheckPet';
import CareLogsHome from '../../../screens/CareLogs';
import MyProfileHome from '../../../screens/MyProfile';
import VisitShelterIcon from '../../icons/VisitShelterIcon';
import CheckPetIcon from '../../icons/CheckPetIcon';
import CareLogsIcon from '../../icons/CareLogsIcon';
import MyProfileIcon from '../../icons/MyProfileIcon';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 90, paddingLeft: 10, paddingRight: 10 }}}>
      <Tab.Screen 
        name="Visit Shelter" 
        component={VisitShelterHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <VisitShelterIcon />
          ),
          tabBarLabel: 'Visit Shelter',
          tabBarIconStyle: { marginBottom: 10, marginTop: 10 },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 10, color: '#68949D' }
        }}
      />
      <Tab.Screen 
        name="Check Pet" 
        component={CheckPetHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CheckPetIcon />
          ),
          tabBarLabel: 'Check Pet',
          tabBarIconStyle: { marginBottom: 10, marginTop: 10 },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 10, color: '#68949D' }
        }}
      />
      <Tab.Screen 
        name="Care Logs" 
        component={CareLogsHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CareLogsIcon />
          ),
          tabBarLabel: 'Care Logs',
          tabBarIconStyle: { marginBottom: 10, marginTop: 10 },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 10, color: '#68949D' }
        }}
      />
      <Tab.Screen 
        name="My Profile" 
        component={MyProfileHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MyProfileIcon />
          ),
          tabBarLabel: 'My Profile',
          tabBarIconStyle: { marginBottom: 10, marginTop: 10 },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 10, color: '#68949D' }
        }}
      />
    </Tab.Navigator>
  );
} 