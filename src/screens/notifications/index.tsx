import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

export const Notifications = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.container}
      data={[
        { id: 1, title: 'Novo app!', text: 'Novo app em funcionamento' },
        { id: 2, title: 'SDUI', text: 'Home e tela de Pix vêm do SDUI' },
        { id: 3, title: 'Notifications', text: 'Notifications é hardcoded' },
      ]}
      renderItem={({ item }) => (
        <View style={styles.notification}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
      ItemSeparatorComponent={<View style={styles.separator} />}
    />
  </>
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  notification: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'medium',
  },
  text: {
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#0000007b',
    marginVertical: 10,
  },
});
