
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WelcomeScreen from './component/WelcomeScreen';
import IntoScreen from './component/IntoScreen';

function App(): React.JSX.Element {

  const [Splashshow, setSplashShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashShow(false)
    }, 2000)
  }, [])

  if (Splashshow) {
    return (
      <WelcomeScreen />
    )
  }

  return (
    <SafeAreaView >
      <StatusBar barStyle={"dark-content"} backgroundColor={"#5AC2681A"}/>
      <IntoScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
