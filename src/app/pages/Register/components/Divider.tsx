import clsx from 'clsx';

export const FormDivider = () => {
  return (
    <div className="divider relative flex w-full">
      <div className={clsx('h-[1px] w-full flex-1 bg-sp-gray-1')}></div>
      <span
        className={clsx(
          'absolute left-2/4 top-[-8px] -translate-x-1/2 bg-white px-[16px] py-0 text-xs uppercase text-sp-gray-2'
        )}
      >
        hoặc
      </span>
      <div className={clsx('h-[1px] w-full flex-1 bg-sp-gray-1')}></div>
    </div>
  );
};
