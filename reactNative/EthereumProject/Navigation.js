import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home/Home';
import Transactions from './components/Transactions/Transactions';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = ()  => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Transactions" component={Transactions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;