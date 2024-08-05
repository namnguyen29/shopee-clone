import { AppInput } from '@app-shared/components';

export const Login = () => {
  return (
    <article>
      <form action="" className="w-[50%]">
        <AppInput placeholder="Số điện thoại 33" />
        <AppInput placeholder="Số điện thoại" error="my error" />
      </form>
      <button></button>
    </article>
  );
};
