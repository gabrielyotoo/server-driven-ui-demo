import { TextStyle, ViewStyle } from 'react-native';

interface ScreenProperties {
  style: ViewStyle;
}

interface ViewSection {
  id: string;
  sectionComponentType: 'View';
  children: Section[];
  styles?: ViewStyle;
}

interface TextSection {
  id: string;
  sectionComponentType: 'Text';
  children: string;
  styles?: TextStyle;
}

export type Section = ViewSection | TextSection;

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
  screens: Screen[];
  sections: Section[];
}
