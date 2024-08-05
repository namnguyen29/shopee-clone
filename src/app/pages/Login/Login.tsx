import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { FormDivider } from '@app-pages/Register/components';
import { AppButton, AppInput, FacebookIcon, GoogleIcon } from '@app-shared/components';

export const Login = () => {
  const { handleSubmit } = useForm();

  return (
    <article className="grid w-full grid-cols-2 grid-rows-1 px-2 md:px-0">
      <div
        className={clsx(
          'form-wrapper col-start-1 col-end-3 flex flex-col items-center justify-center md:col-start-2',
          'w-full max-w-[400px] justify-self-center bg-white',
          'rounded shadow-sp-alpha-14'
        )}
      >
        <form
          onSubmit={handleSubmit((data) => {
            console.log('submit register::', data);
          })}
          className={clsx('flex w-full flex-col items-center gap-7 px-[30px] py-[22px]')}
        >
          <h3 className="self-start text-xl text-sp-black-1">Đăng nhập</h3>
          <AppInput placeholder="Email/SDT/Tên đăng nhập" type={'text'} />
          <AppInput placeholder="Mật khẩu" type="password" />
          <AppButton variant="primary" label="ĐĂNG NHẬP" type="submit" />
        </form>

        <FormDivider />

        <div className={clsx('my-5 gap-3', 'snsLogin flex w-full max-w-[400px] px-[30px]')}>
          <AppButton
            disabled
            label="Facebook"
            icon={<FacebookIcon width={24} height={24} />}
            type="button"
          />
          <AppButton
            disabled
            label="Google"
            icon={<GoogleIcon width={24} height={24} />}
            type="button"
          />
        </div>

        <div className="redirectBox mb-8 text-sm">
          <p>
            Bạn mới biết đến Shopee?{' '}
            <Link className="text-sp-orange-0" to="/register">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};
