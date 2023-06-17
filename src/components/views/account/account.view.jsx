import React from 'react';
import { Avatar, Button, Divider, FlatList, HStack, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useAuthContext } from '../../contexts';

export function AccountView() {
  const { goBack, navigate } = useNavigation();
  const { signOut } = useAuthContext();

  const data = [
    {
      id: 1,
      title: 'Perfil',
      subtitle: 'Visualize e edite suas informações',
      iconName: 'person',
      arrowRightIcon: true,
      onPress: () => navigate('Profile'),
    },
    {
      id: 2,
      title: 'Segurança',
      subtitle: 'Dados da acesso e mais',
      iconName: 'security',
      arrowRightIcon: true,
      onPress: () => navigate('Security'),
    },
    {
      id: 3,
      title: 'Configurações',
      subtitle: 'Aplicativo, layout e mais',
      iconName: 'settings',
      arrowRightIcon: true,
      onPress: () => navigate('Settings'),
    },
    {
      id: 4,
      title: 'Sobre',
      subtitle: 'Informações do aplicativo',
      iconName: 'info-outline',
      arrowRightIcon: true,
      onPress: () => navigate('About'),
    },
  ];

  return (
    <VStack testID="Account-view_VStack" flex={1}>
      <VStack p={5} backgroundColor={theme.colors.white}>
        <HStack alignItems="center" justifyContent="space-between">
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="close" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Notifications')}>
            <MaterialIcons name="notifications-none" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
        </HStack>
        <HStack alignItems="center" mt={5}>
          <Avatar size="md" bg="secondary.800">
            DM
          </Avatar>
          <VStack ml={5}>
            <Text fontSize="lg" bold>
              Diego Muniz
            </Text>
            <Text fontSize="xs">Desenvolvedor</Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack>
        <Divider />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={item.onPress}>
                <HStack
                  my={3}
                  mx={5}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack display="flex" alignItems="center">
                    <MaterialIcons color={theme.colors.text[500]} name={item.iconName} size={24} />
                    <VStack>
                      <Text ml={4} fontSize="md" bold>
                        {item.title}
                      </Text>
                      {item.subtitle ? (
                        <Text ml={4} fontSize="xs">
                          {item.subtitle}
                        </Text>
                      ) : null}
                    </VStack>
                  </HStack>
                  {item.arrowRightIcon ? (
                    <MaterialIcons name="arrow-right" size={24} color={theme.colors.text[500]} />
                  ) : null}
                </HStack>
              </TouchableOpacity>
              <Divider my="2" />
            </>
          )}
        />
      </VStack>
      <Button
        mt="5"
        variant="ghost"
        size="lg"
        leftIcon={<MaterialIcons name="logout" color={theme.colors.primary[800]} size={24} />}
        onPress={signOut}
      >
        Sair do aplicativo
      </Button>
    </VStack>
  );
}
