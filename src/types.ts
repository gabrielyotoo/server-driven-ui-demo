import {
  ImageProps,
  ImageStyle,
  PressableProps,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';

type CustomComponentProps<T> = Omit<T, 'children' | 'style'>;

interface ScreenProperties {
  style: ViewStyle;
}

interface SectionBase {
  id: string;
}

interface SectionComponent {
  View: {
    props?: CustomComponentProps<ViewProps>;
    styles?: ViewStyle;
    children?: Section[];
  };
  Image: {
    props?: CustomComponentProps<ImageProps>;
    styles?: ImageStyle;
    children?: never;
  };
  Text: {
    props?: CustomComponentProps<TextProps>;
    styles?: TextStyle;
    children: string;
  };
  Pressable: {
    props?: CustomComponentProps<PressableProps>;
    styles?: ViewStyle;
    children?: Section[];
    // | (({ pressed }: { pressed: boolean }) => Section[]);
  };
  Gradient: {
    props?: CustomComponentProps<LinearGradientProps>;
    styles?: ViewStyle;
    children?: never;
  };
}

export type Section = {
  [K in keyof SectionComponent]: SectionBase & {
    sectionComponentType: K;
  } & SectionComponent[K];
}[keyof SectionComponent];

export interface Layout {
  [placementName: string]: {
    sections: Section[];
    order: number;
    style?: ViewStyle;
  };
}

export interface ServerResponse {
  id: string;
  properties?: ScreenProperties;
  // No futuro, podemos criar layouts diferentes para diferentes breakpoints
  wide: Layout;
  compact: Layout;
}
