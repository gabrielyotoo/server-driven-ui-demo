import { SectionRenderer } from './section-renderer';
import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native';
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
    const placements = Object.entries(screen.compact);

    const renderPlacements = placements
      .sort(([_, a], [__, b]) => a.order - b.order)
      .map(([name, placement]) => (
        <View style={placement.style} key={name}>
          {placement.sections.map(section => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </View>
      ));

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
            {renderPlacements}
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
          <ScrollView {...screen.properties}>{renderPlacements}</ScrollView>
        </>
      );
    }

    return (
      <>
        <StatusBar
          barStyle={screen.properties?.statusBar.style ?? 'default'}
          animated={screen.properties?.statusBar.animated}
        />
        <View {...screen.properties}>{renderPlacements}</View>
      </>
    );
  }
};
