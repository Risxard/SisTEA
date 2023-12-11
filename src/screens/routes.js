import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './home/Home.jsx'
import Pecs from '../screens/pecs/Pecs.jsx';

import PecsSettings from '../screens/pecs/settings/settings.jsx'

const Stack = createStackNavigator();



const Routes = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#485D89' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Pecs"
        component={Pecs}
        options={({ navigation }) => ({
          title: 'Tira de sentença',
          headerStyle: { backgroundColor: '#D40000' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <AntDesign
              name="leftcircle"
              size={24}
              color="white"
              style={{ marginLeft: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="settings"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate('Configurações')}
            />
          ),
        })}
      />

      <Stack.Screen name="Configurações" component={PecsSettings} />

    </Stack.Navigator>
  );
};

export default Routes;