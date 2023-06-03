import React from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Alert, Box, Button, FormControl, HStack, Heading, Input, Text } from 'native-base';

import { useAuthContext } from '../../../contexts';
import { AuthRoutes } from '../../../constants';

export function ForgotPasswordMolecule() {
  const { signIn } = useAuthContext();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { control, formState } = useFormContext();

  return (
    <>
      <Box w="full" mb="10">
        <Heading size="lg">{t('authViews.forgotPassword.title')}</Heading>
      </Box>

      <Controller
        name="email"
        control={control}
        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
          <FormControl isInvalid={error} mb="10">
            <FormControl.Label>{t('authViews.forgotPassword.email')}</FormControl.Label>
            <Input
              name={name}
              type="text"
              size="lg"
              value={value ?? ''}
              onChangeText={onChange}
              variant="outline"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Alert w="100%" variant="outline" mb={5} colorScheme="info" status="info">
        <HStack alignItems="center" space={4} p={2}>
          <Alert.Icon />
          <Text>{t('authViews.forgotPassword.info')}</Text>
        </HStack>
      </Alert>

      <Button
        testID="login_btn-enter"
        mb="12"
        w="full"
        isDisabled={!formState.isValid}
        onPress={signIn}
      >
        {t('authViews.forgotPassword.button.send')}
      </Button>

      <Button variant="link" onPress={() => navigate(AuthRoutes.LOGIN)}>
        {t('authViews.forgotPassword.button.back')}
      </Button>
    </>
  );
}
