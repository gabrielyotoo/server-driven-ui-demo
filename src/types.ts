import {
  ImageProps,
  ImageStyle,
  PressableProps,
  ScrollViewProps,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';
import { MainStackScreenNames } from './routes/router';

type CustomComponentProps<T> = Omit<T, 'children' | 'style'>;

interface ScreenProperties {
  style: ViewStyle;
}

interface SectionBase {
  id: string;
}

export enum PressableActionType {
  NavigateBack,
  NavigateTo,
  PostRequest,
}

interface NavigateBackAction {
  type: PressableActionType.NavigateBack;
}

interface NavigateToAction {
  type: PressableActionType.NavigateTo;
  to: MainStackScreenNames;
}

interface PostRequestAction<T> {
  type: PressableActionType.PostRequest;
  api: 'pagol';
  endpoint: 'register';
  body: T;
}

type PressableAction<T = unknown> =
  | NavigateToAction
  | NavigateBackAction
  | PostRequestAction<T>;

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
    children: Section[];
    // | (({ pressed }: { pressed: boolean }) => Section[]);
    action: PressableAction;
  };
  Gradient: {
    props?: CustomComponentProps<LinearGradientProps>;
    styles?: ViewStyle;
    children?: never;
  };
  ScrollView: {
    props?: CustomComponentProps<ScrollViewProps>;
    styles?: ViewStyle;
    children?: Section[];
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
