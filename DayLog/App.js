import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Screens/RootStack';

function App() {
  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
  )
}

export default App;
