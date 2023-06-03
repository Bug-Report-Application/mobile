import React from 'react';
import { Box, Button, FormControl, Heading, Input } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../../contexts';
import { AuthRoutes } from '../../../constants';
import { useTranslation } from 'react-i18next';

export function LoginMolecule() {
  const { t } = useTranslation();
  const { signIn } = useAuthContext();
  const { navigate } = useNavigation();
  const { control, formState } = useFormContext();

  return (
    <>
      <Box w="full" mb="10">
        <Heading size="lg">{t('authViews.login.title')}</Heading>
      </Box>

      <Controller
        name="email"
        control={control}
        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
          <FormControl isInvalid={error} mb="10">
            <FormControl.Label>{t('authViews.login.email')}</FormControl.Label>
            <Input
              name={name}
              type="text"
              size="lg"
              value={value ?? ''}
              onChangeText={onChange}
              variant="underlined"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
          <FormControl isInvalid={error} mb="16">
            <FormControl.Label>{t('authViews.login.password')}</FormControl.Label>
            <Input
              name={name}
              type="password"
              size="lg"
              value={value ?? ''}
              onChangeText={onChange}
              variant="underlined"
              isRequired
            />
            {error ? <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage> : null}
          </FormControl>
        )}
      />

      <Button
        testID="login_btn-enter"
        mb="12"
        w="full"
        isDisabled={!formState.isValid}
        onPress={signIn}
      >
        {t('authViews.login.button.enter')}
      </Button>

      <Button variant="link" onPress={() => navigate(AuthRoutes.FORGOT_PASSWORD)}>
        {t('authViews.login.button.forgotPassword')}
      </Button>
    </>
  );
}
