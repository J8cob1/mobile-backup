import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home';

// Here, we describe all our routes (including their props -- undefined indicates no props)
// "Home" is the name of the "Home" route
export type RootStackParamList = {
  Home: undefined;
};

const Root = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Home" component={Home}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
