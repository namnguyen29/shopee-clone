import { HTMLInputAutoCompleteAttribute, ReactNode, RefObject } from 'react';

import { Field, Input, Label } from '@headlessui/react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';

type Props<T extends FieldValues> = Readonly<{
  id?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
  disabled?: boolean;
  error?: string;
  ariaRequired?: boolean;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  inputRef?: RefObject<HTMLInputElement>;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  label: Path<T>;
  register: UseFormRegister<T>;
}>;

export function AppInput<T extends FieldValues>({
  id,
  placeholder,
  label,
  type,
  disabled,
  error,
  autocomplete,
  ariaRequired,
  leftIcon,
  rightIcon,
  register
}: Props<T>) {
  const { onBlur, onChange, ref, name } = register(label);

  return (
    <Field className="w-full text-sm">
      {id && label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative bg-white">
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            {leftIcon}
          </div>
        )}
        <Input
          className={clsx(
            'w-full rounded-sm border border-sp-black-alpha-14 bg-inherit p-3 outline-1 focus:outline',
            disabled && 'hover:cursor-not-allowed',
            !error && 'outline-gray-900',
            error && 'border-sp-red-0 bg-sp-pink-0 outline-0',
            leftIcon && 'ps-10',
            rightIcon && 'pe-[3.5rem]'
          )}
          type={type}
          ref={ref}
          id={id}
          disabled={disabled}
          autoComplete={autocomplete}
          name={name}
          aria-required={ariaRequired}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {rightIcon && (
          <div className="absolute right-0 top-2/4 translate-y-[-50%] pr-2">{rightIcon}</div>
        )}
      </div>
      {error && <p className="absolute text-sp-red-0">{error}</p>}
    </Field>
  );
}
