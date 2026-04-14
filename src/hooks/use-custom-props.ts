import { PressableProps } from 'react-native';
import { Section } from '../types';
import { coordinator } from '../routes';

export const useCustomProps = (section: Section) => {
  let customProps: PressableProps | null = null;

  if (section.sectionComponentType === 'Pressable') {
    customProps = {
      onPress: () => {
        if ('to' in section.action) {
          coordinator.goTo(section.action.to);
        } else {
          // handle API
        }
      },
    };
  }

  return customProps ?? {};
};
