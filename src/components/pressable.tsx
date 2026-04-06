import { Pressable as RnPressable, PressableProps } from 'react-native';

export const Pressable = (props: PressableProps) => {
  return <RnPressable {...props}>Press me</RnPressable>;
};
