import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanageMap';
import OrphanagesDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes( ) {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#f2f3f5" } }}>
        <Screen 
        name="OrphanagesMap" 
        component={OrphanagesMap} />
                <Screen 
        name="OrphanagesDetails" 
        component={OrphanagesDetails} />
      </Navigator>
    </NavigationContainer>
  )
}