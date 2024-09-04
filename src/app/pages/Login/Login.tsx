import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { FormDivider } from '@app-pages/Register/components';
import { AppButton, AppInput, FacebookIcon, GoogleIcon } from '@app-shared/components';
import { LoginError, LoginInput, LoginResponse } from '@app-shared/types';
import { authApiKey, login } from '@app-shared/apis';
import { loginValidatorSchema } from './validators';

export const Login = () => {
  const navigate = useNavigate();
  const {
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginInput>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginValidatorSchema)
  });
  const loginMutation = useMutation<LoginResponse, LoginError, LoginInput>({
    mutationKey: [authApiKey.login],
    mutationFn: (body) => login(body)
  });

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess() {
        navigate('/');
      },
      onError(error) {
        const formError = error.response?.data.data;
        formError &&
          Object.keys(formError).forEach((key) => {
            const errorKey = key as keyof typeof formError;
            setError(errorKey, { type: 'server', message: formError[errorKey] });
          });
      }
    });
  });

  return (
    <article className="grid w-full grid-cols-2 grid-rows-1 px-2 md:px-0">
      <div className="col-start-1 col-end-3 flex w-full max-w-[400px] flex-col items-center justify-center justify-self-center rounded bg-white shadow-sp-alpha-14 md:col-start-2">
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col items-center gap-7 px-[30px] py-[22px]"
        >
          <h3 className="self-start text-xl text-sp-black-1">Đăng nhập</h3>
          <AppInput<LoginInput>
            placeholder="Email/SDT/Tên đăng nhập"
            autocomplete="email"
            type="text"
            ariaRequired={true}
            error={errors.email?.message}
            label="email"
            register={register}
          />
          <AppInput<LoginInput>
            label="password"
            type="password"
            placeholder="Mật khẩu"
            autocomplete="current-password"
            ariaRequired={true}
            register={register}
            error={errors.password?.message}
          />
          <AppButton variant="primary" label="ĐĂNG NHẬP" type="submit" />
        </form>

        <FormDivider />

        <div className="snsLogin my-5 flex w-full max-w-[400px] gap-3 px-[30px]">
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
