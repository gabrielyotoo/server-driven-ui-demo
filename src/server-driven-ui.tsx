import { SectionRenderer } from './section-renderer';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useServerScreen } from './hooks/use-server-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ServerDrivenScreenProps {
  screenName: string;
}

export const ServerDrivenScreen = ({ screenName }: ServerDrivenScreenProps) => {
  const { data, isLoading } = useServerScreen(screenName);
  console.log(data);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (data) {
    const placements = Object.entries(data.compact);

    return (
      <>
        <StatusBar
          barStyle={data.properties?.statusBar.style ?? 'default'}
          animated={data.properties?.statusBar.animated}
        />
        <SafeAreaView
          {...data.properties}
          edges={data.properties?.safeAreaEdges ?? []}
        >
          {placements
            .sort(([_, a], [__, b]) => a.order - b.order)
            .map(([name, placement]) => (
              <View style={placement.style} key={name}>
                {placement.sections.map(section => (
                  <SectionRenderer key={section.id} section={section} />
                ))}
              </View>
            ))}
        </SafeAreaView>
      </>
    );
  }
};
