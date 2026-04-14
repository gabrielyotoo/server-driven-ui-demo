import { PressableActionType, Section } from '../types';
import { coordinator } from '../routes';

export const useCustomProps = (section: Section) => {
  if (section.sectionComponentType === 'Pressable') {
    const { action } = section;
    return {
      onPress: () => {
        if (action.type === PressableActionType.NavigateTo) {
          coordinator.goTo(action.to);
        } else if (action.type === PressableActionType.NavigateBack) {
          coordinator.goBack();
        } else {
          // handle API
        }
      },
    };
  }

  return {};
};
