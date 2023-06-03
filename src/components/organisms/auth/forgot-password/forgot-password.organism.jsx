import React from 'react';
import { Center } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ForgotPasswordMolecule } from '../../../molecules';

export function ForgotPasswordOrganism() {
  const { t } = useTranslation();

  const schema = Yup.object({
    email: Yup.string()
      .email(t('form.format'))
      .required(t('form.required', { field: t('authViews.forgotPassword.email') })),
  }).required();

  const formMethods = useForm({
    mode: 'all',
    defaultValues: {
      email: null,
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Center testID="Forgot-password-organism_Center" flex={1} p={10}>
        <FormProvider {...formMethods}>
          <ForgotPasswordMolecule />
        </FormProvider>
      </Center>
    </>
  );
}
