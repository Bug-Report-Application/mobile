import React from 'react';
import { TouchableOpacity } from 'react-native';

import { HStack, Text, VStack, theme } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function MenuItemAccountAtom({ iconName, title, subtitle, arrowRightIcon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack my={3} mx={5} display="flex" alignItems="center" justifyContent="space-between">
        <HStack display="flex" alignItems="center">
          <MaterialIcons color={theme.colors.text[500]} name={iconName} size={24} />
          <VStack>
            <Text ml={4} fontSize="md" bold>
              {title}
            </Text>
            {subtitle ? (
              <Text ml={4} fontSize="xs">
                {subtitle}
              </Text>
            ) : null}
          </VStack>
        </HStack>
        {arrowRightIcon ? (
          <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.text[500]} />
        ) : null}
      </HStack>
    </TouchableOpacity>
  );
}
