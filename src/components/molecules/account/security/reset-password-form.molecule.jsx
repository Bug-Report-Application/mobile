import React from 'react';

import { Button, FormControl, Input, VStack } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';

export function ResetPasswordFormMolecule() {
  const { control, formState } = useFormContext();

  return (
    <VStack space={3} px={1}>
      <Controller
        name="email"
        control={control}
        render={({ field: { name }, fieldState: { error } }) => (
          <FormControl isInvalid={error} isDisabled={true}>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              name={name}
              type="text"
              size="md"
              value="diego@email.com"
              variant="outline"
              isDisabled={true}
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Controller
        name="currentPassword"
        control={control}
        render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
          <FormControl isInvalid={error}>
            <FormControl.Label>Senha atual</FormControl.Label>
            <Input
              name={name}
              type="text"
              size="md"
              value={value ?? ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Digite sua senha atual"
              variant="outline"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
          <FormControl isInvalid={error}>
            <FormControl.Label>Nova Senha</FormControl.Label>
            <Input
              name={name}
              type="password"
              size="md"
              value={value ?? ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Digite a nova senha"
              variant="outline"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Controller
        name="confirmNewPassword"
        control={control}
        render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
          <FormControl isInvalid={error}>
            <FormControl.Label>Confirmar senha</FormControl.Label>
            <Input
              name={name}
              type="password"
              size="md"
              value={value ?? ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Repita a nova senha"
              variant="outline"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Button testID="ResetPassword-button-update" my="3" w="full" isDisabled={!formState.isValid}>
        Atualizar
      </Button>
    </VStack>
  );
}
