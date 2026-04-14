import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigation';
import { ServerDrivenScreen } from '../server-driven-ui';
import { Notifications as NotificationsScreen } from '../screens/notifications';

export enum MainStackScreenNames {
  Home = 'Home',
  Pix = 'Pix',
  Notifications = 'Notifications',
}

export type RootStackParams = {
  [MainStackScreenNames.Home]: undefined;
  [MainStackScreenNames.Pix]: undefined;
  [MainStackScreenNames.Notifications]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const Home = () => <ServerDrivenScreen screenName="Home" />;
const Pix = () => <ServerDrivenScreen screenName="Pix" />;

export function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={MainStackScreenNames.Home}
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <RootStack.Screen name={MainStackScreenNames.Pix} component={Pix} />
        <RootStack.Screen
          name={MainStackScreenNames.Notifications}
          component={NotificationsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
