import { Field, Input, Label } from '@headlessui/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = Readonly<{
  id?: string;
  disabled?: boolean;
  error?: string;
  ariaRequired?: boolean;
  checkboxLalbel?: string;
  label: Path<T>;
  register: UseFormRegister<T>;
}>;

export function AppCheckbox<T extends FieldValues>({
  id,
  disabled,
  error,
  ariaRequired,
  label,
  checkboxLalbel = '',
  register
}: Props<T>) {
  const { onBlur, onChange, ref, name } = register(label);

  return (
    <Field>
      <div className="flex items-center">
        <Input
          type="checkbox"
          className="size-4 accent-sp-orange-0"
          disabled={disabled}
          aria-required={ariaRequired}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
        />
        <Label htmlFor={id} className="ms-2 text-sm text-gray-900">
          {checkboxLalbel}
        </Label>
      </div>
      {error && <p className="absolute text-sp-red-0">error</p>}
    </Field>
  );
}
