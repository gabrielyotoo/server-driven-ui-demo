import {
  ImageProps,
  PressableProps,
  ScrollViewProps,
  StatusBarStyle,
  TextProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';
import { MainStackScreenNames } from './routes/router';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

type CustomComponentProps<T> = Omit<T, 'children'>;

interface ScreenProperties {
  style: ViewStyle;
  safeAreaEdges?: NativeSafeAreaViewProps['edges'];
  statusBar: {
    style: StatusBarStyle;
    animated?: boolean;
  };
  scrollable?: boolean;
}

interface SectionBase {
  id: string;
  order: number;
}

export enum PressableActionType {
  NavigateBack = 'NavigateBack',
  NavigateTo = 'NavigateTo',
  PostRequest = 'PostRequest',
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
    children?: Section[];
  };
  Image: {
    props?: CustomComponentProps<ImageProps>;
    children?: never;
  };
  Text: {
    props?: CustomComponentProps<TextProps>;
    children: string;
  };
  Pressable: {
    props?: CustomComponentProps<PressableProps>;
    children: Section[];
    // | (({ pressed }: { pressed: boolean }) => Section[]);
    action: PressableAction;
  };
  Gradient: {
    props?: CustomComponentProps<LinearGradientProps>;
    children?: never;
  };
  ScrollView: {
    props?: CustomComponentProps<ScrollViewProps>;
    children?: Section[];
  };
}

export type Section = {
  [K in keyof SectionComponent]: SectionBase & {
    sectionComponentType: K;
  } & SectionComponent[K];
}[keyof SectionComponent];

export interface Screen {
  id: string;
  name: string;
  properties?: ScreenProperties;
  // No futuro, podemos criar layouts diferentes para diferentes breakpoints
  wide: Section[];
  compact: Section[];
}
