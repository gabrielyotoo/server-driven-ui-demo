import {
  ImageProps,
  ImageStyle,
  PressableProps,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

type PropsWithoutChildren<T> = Omit<T, 'children'>;

interface ScreenProperties {
  style: ViewStyle;
}

interface SectionBase {
  id: string;
}

interface SectionComponent {
  View: {
    props?: PropsWithoutChildren<ViewProps>;
    styles?: ViewStyle;
    children?: Section[];
  };
  Image: {
    props?: PropsWithoutChildren<ImageProps>;
    styles?: ImageStyle;
    children?: never;
  };
  Text: {
    props?: PropsWithoutChildren<TextProps>;
    styles?: TextStyle;
    children: string;
  };
  Pressable: {
    props?: PropsWithoutChildren<PressableProps>;
    styles?: ViewStyle;
    children?: Section[] | (({ pressed }: { pressed: boolean }) => Section[]);
  };
}

export type Section<T extends keyof SectionComponent = keyof SectionComponent> =
  SectionBase & {
    sectionComponentType: T;
  } & SectionComponent[T];

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
