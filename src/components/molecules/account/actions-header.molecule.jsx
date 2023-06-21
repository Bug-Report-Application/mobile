import React from 'react';
import { HStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function ActionsHeaderMolecule() {
  const { goBack, navigate } = useNavigation();

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <TouchableOpacity onPress={goBack}>
        <MaterialIcons name="close" size={30} color={theme.colors.text[500]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Notifications')}>
        <MaterialIcons name="notifications-none" size={28} color={theme.colors.text[500]} />
      </TouchableOpacity>
    </HStack>
  );
}
