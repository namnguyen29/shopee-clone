import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { AppInput, FacebookIcon, GoogleIcon, AppButton } from '@app-shared/components';
import styles from './Register.module.scss';
import { FormDivider } from './components';

export const Register = () => {
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
          className={clsx('w-full', 'px-[30px] py-[22px]', 'flex flex-col items-center gap-7')}
        >
          <h3 className="self-start text-xl text-sp-black-1">Đăng ký</h3>
          <AppInput placeholder="Email address" type={'text'} />
          <AppInput placeholder="Password" type="password" />
          <AppButton variant="primary" label="TIẾP THEO" type="submit" />
        </form>

        <FormDivider />

        <div
          className={clsx(
            styles.snsLogin,
            'mt-5 gap-3',
            'snsLogin flex w-full max-w-[400px] px-[30px]'
          )}
        >
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

        <div className="policies my-7 text-center text-xs">
          <p className="px-[60px]">
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
            <a
              href="https://help.shopee.vn/portal/4/article/77243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-orange-0"
            >
              Điều khoản dịch vụ
            </a>{' '}
            &{' '}
            <a
              href="https://help.shopee.vn/portal/4/article/77244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sp-orange-0"
            >
              Chính sách bảo mật
            </a>
          </p>
        </div>

        <div className="redirectBox mb-8 text-sm">
          <p>
            Bạn đã có tài khoản?{' '}
            <Link className="text-sp-orange-0" to="/login">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};
