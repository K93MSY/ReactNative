import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, ActivityIndicator, Alert,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native App!
      </Text>
      <ActivityIndicator size="large" color="#0000ff" />
      <Button
        title="Press me"
        color="#f194ff"
        style={styles.under_navigation_left}
        onPress={() => {}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  under_navigation_left: {
    alignItems: 'flex-start',
  }
});
