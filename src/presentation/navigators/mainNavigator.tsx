import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/presentation/pages/Home';


const MainStack = createStackNavigator();

const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    )
}

export default MainNavigator;