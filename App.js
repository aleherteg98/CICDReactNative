import React, {useEffect} from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const App = () => {
  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      Alert.alert('Sorry');
    }
  };

  useEffect(() => {
    checkPreviousSession();
  });

  return (
    <View style={styles.container}>
      <Button
        title="Calculate inflation"
        onPress={() => {
          Analytics.trackEvent('calculate_inflation', {
            Internet: 'Cellular',
            GPS: 'On',
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
