import React from 'react';
import { Divider, FlatList, HStack, Text, VStack, theme } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function MenuItemAppMolecule({ flatListData }) {
  return (
    <VStack testID="MenuItemAppMolecule-molecule_VStack">
      <VStack>
        <Divider />
        <Text ml={5} my={3} bold>
          Aplicativo
        </Text>
        <FlatList
          data={flatListData}
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
    </VStack>
  );
}
