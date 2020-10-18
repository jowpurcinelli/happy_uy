import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import OrphanagesMap from './pages/OrphanageMap';
import OrphanagesDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanages/OrphanageData';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />

        <Screen 
          name="OrphanageDetails" 
          component={OrphanagesDetails} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Seleccione en el mapa" />
          }}
        />

        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe los datos" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;