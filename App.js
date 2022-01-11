import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LandingPage from './src/Components/LandingPage.js';
import ListPage from './src/Components/ListPage';
import MenuTest from './src/Components/MenuTest.js';
import EventsPage from './src/Components/EventsPage.js';
import ArModelPage from './src/Components/ArModel.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestAr from './src/Components/TestAr.js';
import TourismDescPage from './src/Components/TourismDescPage'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{ title: 'Welcome', headerTitleAlign: 'center' }}
        />
        <Stack.Screen 
          name="Restaurant" 
          component={ListPage}
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="menu" 
          component={MenuTest} 
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="Event" 
          component={EventsPage} 
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="Tourism" 
          component={ListPage} 
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="ArModels" 
          component={ArModelPage} 
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="testAr" 
          component={TestAr} 
          options={({ route }) => ({ title: route.params.title })} 
        />
        <Stack.Screen 
          name="TourismDestination" 
          component={TourismDescPage} 
          options={({ route }) => ({ title: route.params.title })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}