import React from 'react';
import { Button, Center, Text } from 'native-base';
import { useAuthContext } from '../../contexts';

export function HomeTemplate() {
  const { signOut } = useAuthContext();

  return (
    <Center testID="Home-template_Center" flex={1}>
      <Text textAlign="center">
        Tela inicial da aplicação. O usuário será redirecionado para esta tela.
      </Text>
      <Button onPress={signOut}>Sair</Button>
    </Center>
  );
}
