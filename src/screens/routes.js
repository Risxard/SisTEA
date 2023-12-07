import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 

import Home from './home/Home.jsx'
import Pecs from './pecs/Pecs.jsx'
import DropArea from "../components/DropArea/DropArea.jsx";




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
            title: 'Tira de senteça',
            headerStyle: { backgroundColor: '#D40000' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerLeft: ({ onPress }) => (
              <AntDesign
                name="leftcircle"
                size={24}
                color="white"
                style={{ marginLeft: 10 }}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />

      <Stack.Screen name="DropArea" component={DropArea} />
      </Stack.Navigator>
    );
  };
  
  export default Routes;