import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigation';

export enum MainStackScreenNames {
  Pix = 'Pix',
  Notifications = 'Notifications',
}

export type RootStackParams = {
  [MainStackScreenNames.Pix]: undefined;
  [MainStackScreenNames.Notifications]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={MainStackScreenNames.Pix}
          options={{
            headerShown: false,
          }}
          component={Search}
        />
        <RootStack.Screen
          name={MainStackScreenNames.Notifications}
          component={List}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
