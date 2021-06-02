import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import {ProductsCart} from './src/pages/ProductsCart/ProductsCart';
import {ProductsList} from './src/pages/ProductsList/ProductsList';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={ProductsList}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="cart"
          component={ProductsCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
