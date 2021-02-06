// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import Home from '../screens/Home'
import BloodDonor from '../screens/BloodDonor'
import FirstTimeUser from '../screens/FirstTimeUser'
import {Provider} from 'react-redux'
import store from '../store/index'
import DonorDetails from '../screens/DonorDetails'
import DonateBlood from '../screens/DonateBlood'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}   options={{headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BloodDonor" component={BloodDonor} />
        <Stack.Screen name="FirstTimeUser" component={FirstTimeUser} />
        <Stack.Screen name="DonorDetails" component={DonorDetails} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;