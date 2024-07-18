/* eslint-disable prettier/prettier */
import React from 'react';

import { FormProvider } from 'react-hook-form';
import { FormComponentProps } from './FormTypes';

const FormComponent: React.FC<FormComponentProps> = ({
  children,
  methods,
  submit,
}) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={submit}>{children}</form>
    </FormProvider>
  );
};

export default FormComponent;
