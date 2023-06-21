import React from 'react';

import { HStack, Text, VStack, theme } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderView({ iconLeft, onPressIconLeft, iconRight, onPressIconRight, title }) {
  return (
    <VStack p={5} backgroundColor={theme.colors.white}>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack>
          <TouchableOpacity onPress={onPressIconLeft}>
            <MaterialIcons name={iconLeft} size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
          {title ? (
            <Text ml="2" bold fontSize="lg">
              {title}
            </Text>
          ) : null}
        </HStack>
        {iconRight && onPressIconRight ? (
          <TouchableOpacity onPress={onPressIconRight}>
            <MaterialIcons name={iconRight} size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
        ) : null}
      </HStack>
    </VStack>
  );
}
