import React from 'react';
import { HStack, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function ProfileView() {
  const { goBack } = useNavigation();

  return (
    <VStack testID="Profile-view_VStack" flex={1}>
      <VStack p={5} backgroundColor={theme.colors.white}>
        <HStack alignItems="center" justifyContent="space-between">
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="close" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
          <Text bold fontSize="lg">
            Perfil
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="help-outline" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
        </HStack>
      </VStack>
    </VStack>
  );
}
