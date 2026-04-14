import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './routes';
import { HttpContext } from './context/http';
import { AxiosClient } from './services/axios';

const queryClient = new QueryClient();

const axios = new AxiosClient();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <HttpContext.Provider value={axios}>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </SafeAreaProvider>
      </HttpContext.Provider>
    </QueryClientProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
