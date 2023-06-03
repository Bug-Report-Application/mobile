import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { VStack } from 'native-base';

import BackgroundImage from '../../../../../assets/images/background-mobile.png';
import { ForgotPasswordTemplate } from '../../../templates';

export function ForgotPasswordView() {
  const styles = StyleSheet.create({
    img: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <VStack testID="Forgot-Password-view_VStack" flex={1}>
      <ImageBackground
        testID="Forgot-Password-view_backgroundImage"
        source={BackgroundImage}
        style={styles.img}
      >
        <ForgotPasswordTemplate />
      </ImageBackground>
    </VStack>
  );
}
