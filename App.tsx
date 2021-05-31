import React, { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme, darkTheme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from '~/presentation/navigators';

export default function App(): unknown {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'light' ? theme : darkTheme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
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
