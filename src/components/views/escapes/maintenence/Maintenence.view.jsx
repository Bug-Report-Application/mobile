import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { VStack } from 'native-base';

import BackgroundImage from '../../../../../assets/images/background-mobile.png';
import { MaintenenceProvider } from '../../../contexts';
import { MaintenenceTemplate } from '../../../templates';

export function MaintenenceView() {
  const styles = StyleSheet.create({
    img: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <MaintenenceProvider>
      <VStack testID="Maintenence-view_vstack" flex={1} backgroundColor="light.50">
        <ImageBackground
          testID="Maintenence-view_backgroundImage"
          source={BackgroundImage}
          style={styles.img}
        >
          <MaintenenceTemplate />
        </ImageBackground>
      </VStack>
    </MaintenenceProvider>
  );
}
