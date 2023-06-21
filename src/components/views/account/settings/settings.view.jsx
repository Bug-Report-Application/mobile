import React, { useState } from 'react';
import { Divider, FlatList, HStack, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { SelectLanguage } from '../../../atoms';

export function SettingsView() {
  const [isOpen, setIsOpen] = useState(false);
  const { goBack } = useNavigation();

  const appData = [
    {
      id: 1,
      title: 'Notificações',
      subtitle: 'Selecione se deseja receber notificações',
      iconName: 'notifications-none',
      arrowRightIcon: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Idioma',
      subtitle: 'Selecione a linguagem de sua escolha',
      iconName: 'language',
      arrowRightIcon: false,
      onPress: () => setIsOpen(true),
    },
  ];

  return (
    <>
      <SelectLanguage isOpen={isOpen} setIsOpen={setIsOpen} />

      <VStack testID="Profile-view_VStack" flex={1}>
        <VStack p={5} backgroundColor={theme.colors.white}>
          <HStack alignItems="center" justifyContent="space-between">
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons name="keyboard-arrow-left" size={32} color={theme.colors.text[500]} />
            </TouchableOpacity>
            <Text bold fontSize="lg">
              Configurações
            </Text>
            <TouchableOpacity>
              <MaterialIcons name="help-outline" size={28} color={theme.colors.text[500]} />
            </TouchableOpacity>
          </HStack>
        </VStack>
        <VStack>
          <Divider />
          <Text ml={5} my={3} bold>
            Aplicativo
          </Text>
          <FlatList
            data={appData}
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
                      <MaterialIcons
                        color={theme.colors.text[500]}
                        name={item.iconName}
                        size={24}
                      />
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
        <VStack>
          <Text ml={5} my={3} bold>
            Layout do sistema
          </Text>
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
                      <MaterialIcons
                        color={theme.colors.text[500]}
                        name={item.iconName}
                        size={24}
                      />
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
      </VStack>
    </>
  );
}
