import React from 'react';

import { VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';

import { ResetPasswordFormMolecule } from '../../../molecules';
import { Card } from '../../../shared';

export function ResetPasswordFormOrganism() {
  const formMethods = useForm({
    mode: 'all',
    defaultValues: {
      currentPassword: null,
      newPassword: null,
      confirmNewPassword: null,
    },
  });

  return (
    <VStack m="3">
      <Card title="Atualizar senha" subtitle="Atualize seus dados de acesso">
        <FormProvider {...formMethods}>
          <ResetPasswordFormMolecule />
        </FormProvider>
      </Card>
    </VStack>
  );
}
