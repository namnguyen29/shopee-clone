import { MouseEventHandler, ReactNode } from 'react';

import { Button } from '@headlessui/react';
import clsx from 'clsx';

type Props = Readonly<{
  label: string;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  variant?: 'primary' | 'outlined';
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export const AppButton = ({ label, type, disabled, icon, variant, onClick }: Props) => {
  return (
    <Button
      className={clsx(
        'border-sp-gray-1 rounded-sm border',
        'flex items-center justify-center outline-0',
        'w-full gap-1 rounded-sm px-[12px] py-[7px]',
        disabled && 'cursor-not-allowed opacity-50',
        variant === 'primary' ? 'bg-sp-orange-0 text-white' : 'text-sp-black-1 bg-white'
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {icon && icon}
      <span>{label}</span>
    </Button>
  );
};
