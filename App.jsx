import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/HomeScreen';
import PlayersScreen from './screens/Players/PlayersScreen';
import GameScreen from './screens/Game/GameScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Players" component={PlayersScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;