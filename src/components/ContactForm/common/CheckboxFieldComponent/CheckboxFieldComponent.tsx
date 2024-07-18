/* eslint-disable prettier/prettier */
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormElementProps } from '../../FormTypes';

const CheckboxComponent: React.FC<FormElementProps> = ({ label, name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          onChange={onChange}
          value={value || false}
          control={<Checkbox />}
          label={label}
        />
      )}
    />
  );
};

export default CheckboxComponent;
