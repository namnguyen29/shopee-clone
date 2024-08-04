import clsx from 'clsx';

export const FormDivider = () => {
  return (
    <div className="divider relative mb-[14px] flex w-full">
      <div className={clsx('bg-sp-gray-1 h-[1px] w-full flex-1')}></div>
      <span
        className={clsx(
          'text-sp-gray-2 absolute left-2/4 top-[-8px] -translate-x-1/2 bg-white px-[16px] py-0 text-xs uppercase'
        )}
      >
        hoặc
      </span>
      <div className={clsx('bg-sp-gray-1 h-[1px] w-full flex-1')}></div>
    </div>
  );
};
