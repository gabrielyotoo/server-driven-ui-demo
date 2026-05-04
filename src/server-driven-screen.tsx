import { SectionRenderer } from './section-renderer';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useServerScreen } from './hooks/use-server-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ServerDrivenScreenProps {
  screenName: string;
}

export const ServerDrivenScreen = ({ screenName }: ServerDrivenScreenProps) => {
  const { data: screen, isLoading } = useServerScreen(screenName);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (screen) {
    const sections = screen.compact;

    const renderSections = sections
      .sort((a, b) => a.order - b.order)
      .map(section => <SectionRenderer key={section.id} section={section} />);

    if (screen.properties?.safeAreaEdges) {
      return (
        <>
          <StatusBar
            barStyle={screen.properties?.statusBar.style ?? 'default'}
            animated={screen.properties?.statusBar.animated}
          />
          <SafeAreaView
            {...screen.properties}
            edges={screen.properties?.safeAreaEdges ?? []}
          >
            {renderSections}
          </SafeAreaView>
        </>
      );
    }

    if (screen.properties?.scrollable) {
      return (
        <>
          <StatusBar
            barStyle={screen.properties?.statusBar.style ?? 'default'}
            animated={screen.properties?.statusBar.animated}
          />
          <ScrollView {...screen.properties}>{renderSections}</ScrollView>
        </>
      );
    }

    return (
      <>
        <StatusBar
          barStyle={screen.properties?.statusBar.style ?? 'default'}
          animated={screen.properties?.statusBar.animated}
        />
        <View
          {...screen.properties}
          style={[screen.properties?.style, styles.screen]}
        >
          {renderSections}
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
