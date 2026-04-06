import {
  ImageProps,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface ScreenProperties {
  style: ViewStyle;
}

interface ViewSection {
  id: string;
  sectionComponentType: 'View';
  children: Section[];
  props?: ViewProps;
  styles?: ViewStyle;
}

interface ImageSection {
  id: string;
  sectionComponentType: 'Image';
  children?: undefined;
  props?: ImageProps;
  styles?: ImageStyle;
}

interface TextSection {
  id: string;
  sectionComponentType: 'Text';
  children: string;
  props?: TextProps;
  styles?: TextStyle;
}

export type Section = ViewSection | TextSection | ImageSection;

export interface Layout {
  [placementName: string]: {
    sections: Pick<Section, 'id'>[];
    order: number;
  };
}

interface Screen {
  id: string;
  properties?: ScreenProperties;
  // No futuro, podemos criar layouts diferentes para diferentes breakpoints
  wide: Layout;
  compact: Layout;
}

export interface ServerResponse {
  screen: Screen;
  sections: Section[];
}
