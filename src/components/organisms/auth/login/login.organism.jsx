import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { HeaderMolecule, LoginMolecule } from '../../../molecules';
import { useTranslation } from 'react-i18next';
import { Center } from 'native-base';

export function LoginOrganism() {
  const { t } = useTranslation();
  const schema = Yup.object({
    email: Yup.string()
      .email(t('form.format'))
      .required(t('form.required', { field: t('authViews.login.email') })),
    password: Yup.string().required(t('form.required', { field: t('authViews.login.password') })),
  }).required();

  const formMethods = useForm({
    mode: 'all',
    defaultValues: {
      email: null,
      password: null,
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <HeaderMolecule />
      <Center testID="Login-template_Center" flex={1} p={10}>
        <FormProvider {...formMethods}>
          <LoginMolecule />
        </FormProvider>
      </Center>
    </>
  );
}
