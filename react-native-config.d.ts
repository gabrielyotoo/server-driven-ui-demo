declare module 'react-native-config' {
  export interface NativeConfig {
    MOCK_API_CALLS?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
