import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { AppInput, FacebookIcon, GoogleIcon, AppButton } from '@app-shared/components';
import styles from './Register.module.scss';
import { FormDivider } from './components';
import { authApiKey, register } from '@app-shared/apis';
import { RegisterError, RegisterInput, RegisterResponse } from '@app-shared/types';
import { registerValidatorSchema } from './validators';

type RegisterFormInput = RegisterInput & { confirm_password: string };

export const Register = () => {
  const {
    control,
    setError,
    formState: { isValid },
    handleSubmit
  } = useForm<RegisterFormInput>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(registerValidatorSchema)
  });

  const registerMutation = useMutation<RegisterResponse, RegisterError, RegisterInput>({
    mutationKey: [authApiKey.register],
    mutationFn: (body) => register(body)
  });

  const onSubmitForm = handleSubmit((data) => {
    const { email, password } = data;

    registerMutation.mutate(
      { email, password },
      {
        onSuccess(data, variables, context) {
          console.log({
            data,
            variables,
            context
          });
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
      <div
        className={
          'col-start-1 col-end-3 flex w-full max-w-[400px] flex-col items-center justify-center justify-self-center rounded bg-white shadow-sp-alpha-14 md:col-start-2'
        }
      >
        <form
          noValidate
          onSubmit={onSubmitForm}
          className="flex w-full flex-col items-center gap-7 px-[30px] py-[22px]"
        >
          <h3 className="self-start text-xl text-sp-black-1">Đăng ký</h3>
          <Controller
            control={control}
            name="email"
            render={({ field: { onBlur, onChange }, formState: { errors } }) => (
              <AppInput
                placeholder="Email address"
                type="text"
                ariaRequired={true}
                onChange={onChange}
                onBlur={onBlur}
                autocomplete="email"
                error={errors && errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange }, formState: { errors } }) => (
              <AppInput
                placeholder="Password"
                type="password"
                ariaRequired={true}
                onChange={onChange}
                onBlur={onBlur}
                autocomplete="email"
                error={errors && errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onBlur, onChange }, formState: { errors } }) => (
              <AppInput
                placeholder="Confirm Password"
                type="password"
                ariaRequired={true}
                onChange={onChange}
                onBlur={onBlur}
                error={errors && errors.confirm_password?.message}
              />
            )}
          />

          <AppButton variant="primary" label="TIẾP THEO" type="submit" disabled={!isValid} />
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
