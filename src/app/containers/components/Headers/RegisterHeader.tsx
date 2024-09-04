import { ShopeeIcon } from '@app-shared/components';
import { Link } from 'react-router-dom';

type Props = Readonly<{
  path: string;
}>;

export const RegisterHeader = ({ path }: Props) => {
  return (
    <header>
      <nav className="container mx-auto flex h-[84px] max-w-[1200px] items-center justify-between">
        <div className="left flex items-center">
          <Link to="/">
            <ShopeeIcon fillColor="fill-sp-orange-0" width="w-[190px]" height="h-[42px]" />
          </Link>
          {path === '/login' && <h3 className="hidden text-2xl md:inline-block">Đăng nhập</h3>}
          {path === '/register' && <h3 className="hidden text-2xl md:inline-block">Đăng ký</h3>}
        </div>
        <div className="right">
          <a className="mr-[15px] text-sm text-sp-orange-0" href="https://help.shopee.vn/vn/s">
            <span>Bạn cần giúp đỡ?</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
