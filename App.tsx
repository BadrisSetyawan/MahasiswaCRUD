import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Dashboard from './src/screens/Dashboard';
import {RootStackParamList} from './src/types/navigationTypes';
import DetailMahasiswa from './src/screens/DetailMahasiswa';
import CreateMahasiswa from './src/screens/CreateMahasiswa';
import EditMahasiswa from './src/screens/EditMahasiswa';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            animation: 'fade_from_bottom',
          }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="DetailMahasiswa" component={DetailMahasiswa} />
          <Stack.Screen name="CreateMahasiswa" component={CreateMahasiswa} />
          <Stack.Screen name="EditMahasiswa" component={EditMahasiswa} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
