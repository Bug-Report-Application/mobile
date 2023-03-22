import React from 'react';
import { MaintenenceTemplate } from '../../templates/escapes/Maintenence.template';
import { MaintenenceProvider } from '../../contexts/escapes/Maintenence.context';

export function MaintenenceView() {
  return (
    <MaintenenceProvider>
      <MaintenenceTemplate />
    </MaintenenceProvider>
  );
}
