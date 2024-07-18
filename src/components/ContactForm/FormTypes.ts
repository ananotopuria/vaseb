/* eslint-disable prettier/prettier */
import { InputProps } from '@headlessui/react';
import { FilledInputProps, OutlinedInputProps } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

export type FormValues = {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  message: string;
  isAgree?: boolean;
};

export type Paths<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]-?: K extends string
          ? `${K}` | `${K}.${Paths<T[K]>}`
          : never;
      }[keyof T]
    : never;

export interface FormElementProps {
  label: string;
  name: Paths<FormValues>;
  placeholder?: string;
  isNumber?: boolean;
  isTextarea?: boolean;
  rows?: number;
  inputProps?:
    | Partial<OutlinedInputProps>
    | Partial<FilledInputProps>
    | Partial<InputProps>;
}

export interface FormComponentProps {
  children: React.ReactNode;
  methods: UseFormReturn<FormValues>;
  submit: React.FormEventHandler<HTMLFormElement>;
}
