import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { VStack } from 'native-base';

import BackgroundImage from '../../../../../assets/images/background-mobile.png';
import { LoginTemplate } from '../../../templates';

export function LoginView() {
  const styles = StyleSheet.create({
    img: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <VStack testID="Login-view_VStack" flex={1}>
      <ImageBackground
        testID="Maintenence-view_backgroundImage"
        source={BackgroundImage}
        style={styles.img}
      >
        <LoginTemplate />
      </ImageBackground>
    </VStack>
  );
}
