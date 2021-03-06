import * as React from 'react';
import AppLoading from 'expo-app-loading';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import DraftbitTheme from './themes/DraftbitTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
  });

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={cacheAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DraftbitTheme}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
