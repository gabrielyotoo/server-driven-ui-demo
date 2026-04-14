import { MainStackScreenNames } from '../router';
import { navigation } from './navigation';

const mainCoordinator = {
  goTo: (screen: MainStackScreenNames) => navigation.push(screen),
  goToPix: () => navigation.push(MainStackScreenNames.Pix),
  goToNotifications: () => navigation.push(MainStackScreenNames.Notifications),
};

export const coordinator = {
  ...mainCoordinator,
  goBack: () => navigation.goBack(),
};
