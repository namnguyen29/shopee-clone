import { ChangeEvent, FocusEvent, HTMLInputAutoCompleteAttribute, RefObject } from 'react';

import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';

import styles from './AppInput.module.scss';

type Props = Readonly<{
  placeholder?: string;
  id?: string;
  type: 'text' | 'email' | 'password';
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  value?: string;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
}>;

export const AppInput = ({
  placeholder,
  id,
  name,
  type,
  required,
  disabled,
  error,
  label,
  value,
  autocomplete,
  inputRef,
  onBlur,
  onChange
}: Props) => {
  return (
    <Field className={clsx('w-full text-sm')}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={clsx(
          'border-sp-black-alpha-14 border p-3',
          styles.textInput,
          'h-10 rounded-sm outline-1',
          'focus:outline',
          disabled && 'hover:cursor-not-allowed',
          !error && 'outline-gray-900',
          error && 'border-sp-red-0 bg-sp-pink-0 outline-0'
        )}
        type={type}
        ref={inputRef}
        id={id}
        required={required}
        disabled={disabled}
        autoComplete={autocomplete}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={clsx('text-sp-red-0')}>{error}</p>}
    </Field>
  );
};
