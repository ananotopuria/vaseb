/* eslint-disable prettier/prettier */
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormElementProps } from '../../FormTypes';
import styles from '../../ContactForm.module.css';

const TextFieldComponent: React.FC<FormElementProps> = ({
  label,
  name,
  placeholder,
  isNumber,
  isTextarea,
  rows,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          className={isTextarea ? styles.textAreaField : ''}
          type={isNumber ? 'number' : 'text'}
          InputLabelProps={{
            shrink: true,
            className: styles.inputLabel,
          }}
          InputProps={{
            classes: {
              root: styles.inputField,
              notchedOutline: styles.inputField,
              input: styles.inputField,
            },
          }}
          rows={isTextarea ? rows : ''}
          multiline={isTextarea ? true : false}
          onChange={onChange}
          value={value || ''}
          error={!!error?.message}
          label={label}
          placeholder={placeholder}
          variant="standard"
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextFieldComponent;
