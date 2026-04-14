import { SectionRenderer } from './section-renderer';
import { ActivityIndicator, View } from 'react-native';
import { useServerScreen } from './hooks/use-server-screen';

interface ServerDrivenScreenProps {
  screenName: string;
}

export const ServerDrivenScreen = ({ screenName }: ServerDrivenScreenProps) => {
  const { data, isLoading } = useServerScreen(screenName);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (data) {
    const placements = Object.entries(data.compact);
    return (
      <View {...data.properties}>
        {placements
          .sort(([_, a], [__, b]) => a.order - b.order)
          .map(([name, placement]) => (
            <View style={placement.style} key={name}>
              {placement.sections.map(section => (
                <SectionRenderer key={section.id} section={section} />
              ))}
            </View>
          ))}
      </View>
    );
  }
};
