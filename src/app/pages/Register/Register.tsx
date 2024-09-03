import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { AppInput, FacebookIcon, GoogleIcon, AppButton } from '@app-shared/components';
import styles from './Register.module.scss';
import { FormDivider } from './components';
import { authApiKey, register as registerAccount } from '@app-shared/apis';
import { RegisterError, RegisterInput, RegisterResponse } from '@app-shared/types';
import { RegisterSchema, registerValidatorSchema } from './validators';
import { successToast } from '@app-shared/utils';

export const Register = () => {
  const navigate = useNavigate();
  const {
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<RegisterSchema>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(registerValidatorSchema)
  });

  const registerMutation = useMutation<RegisterResponse, RegisterError, RegisterInput>({
    mutationKey: [authApiKey.register],
    mutationFn: (body) => registerAccount(body)
  });

  const onSubmitForm = handleSubmit((data) => {
    const { email, password } = data;
    registerMutation.mutate(
      { email, password },
      {
        onSuccess() {
          successToast('Amazing, welcome to SP Clone');
          navigate('/login');
        },
        onError(error) {
          const formError = error.response?.data.data;
          formError &&
            Object.keys(formError).forEach((key) => {
              const errorKey = key as keyof typeof formError;
              setError(errorKey, {
                type: 'server',
                message: formError[errorKey]
              });
            });
        }
      }
    );
  });

  return (
    <article className="grid w-full grid-cols-2 grid-rows-1 px-2 md:px-0">
      <div className="col-start-1 col-end-3 flex w-full max-w-[400px] flex-col items-center justify-center justify-self-center rounded bg-white shadow-sp-alpha-14 md:col-start-2">
        <form
          noValidate
          onSubmit={onSubmitForm}
          className="flex w-full flex-col items-center gap-7 px-[30px] py-[22px]"
        >
          <h3 className="self-start text-xl text-sp-black-1">Đăng ký</h3>
          <AppInput<RegisterSchema>
            placeholder="Email address"
            autocomplete="email"
            type="text"
            label="email"
            ariaRequired={true}
            error={errors.email?.message}
            register={register}
          />

          <AppInput<RegisterSchema>
            placeholder="Password"
            type="password"
            autocomplete="current-password"
            label="password"
            ariaRequired={true}
            error={errors.password?.message}
            register={register}
          />

          <AppInput<RegisterSchema>
            placeholder="Confirm Password"
            type="password"
            label="confirm_password"
            ariaRequired={true}
            error={errors.confirm_password?.message}
            register={register}
          />
          <AppButton variant="primary" label="TIẾP THEO" type="submit" />
        </form>
        <FormDivider />
        <div
          className={`${styles.snsLogin} gap-3snsLogin px-[30px]' mt-5 flex w-full max-w-[400px]`}
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
