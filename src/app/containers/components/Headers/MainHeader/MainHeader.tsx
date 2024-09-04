import clsx from 'clsx';
import styles from './MainHeader.module.scss';
import {
  AppInput,
  BellIcon,
  CartIcon,
  CheveronDownIcon,
  QuestionCircleIcon,
  SearchIcon,
  ShopeeIcon,
  WorldIcon
} from '@app-shared/components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { leftUserData } from '@app-shared/constants';

export const MainHeader = () => {
  const { register } = useForm<{ search: string }>();

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-[100] items-center bg-sp-orange-0 text-white',
        styles.mainHeader
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between p-1 text-[13px] md:flex-row">
        <ul className="flex items-center">
          {leftUserData.map((item, idx) => (
            <li key={`${item.title}-${idx}`}>
              <div
                className={clsx(
                  styles.navItem,
                  'relative ml-[0.625rem] px-1 py-2 hover:text-gray-200'
                )}
              >
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </div>
            </li>
          ))}
          <li>
            <div className="ml-[0.625rem] px-1 py-2">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <span className={clsx(styles.fbWhite, 'h-[16px] w-[16px]')}></span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <span className={clsx(styles.insWhite, 'h-[16px] w-[16px]')}></span>
              </a>
            </div>
          </li>
        </ul>

        <ul className="mr-[0.625rem] flex items-center gap-6">
          <li>
            <div className="flex cursor-pointer items-center gap-1">
              <BellIcon width={18} height={18} />
              <span>Thông báo</span>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer items-center gap-1">
              <QuestionCircleIcon width={18} height={18} />
              <span>Hỗ trợ</span>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer items-center gap-1">
              <WorldIcon width={18} height={18} />
              <span>Tiếng Việt</span>
              <CheveronDownIcon width={16} height={16} />
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer items-center gap-1">
              <Link to="/login">Đăng nhập</Link> / <Link to="/register">Đăng Ký</Link>
            </div>
          </li>
        </ul>
      </div>

      <div className={clsx(styles.headerColumnGrid, 'mx-auto grid w-full max-w-7xl p-1')}>
        <Link to="/" className="relative mr-10 hidden md:inline-block">
          <div className="absolute left-0 top-[5px]">
            <ShopeeIcon fillColor="fill-white" width="w-[162px]" height="h-[50px]" />
          </div>
        </Link>
        <div className="text-black">
          <AppInput
            type="text"
            placeholder="Sale mừng Tết"
            rightIcon={<SearchIcon />}
            label="search"
            register={register}
          />
          <ul className="hidden items-center gap-3 py-1 text-[13px] text-white md:flex">
            <li>Quần áo nam</li>
            <li>Áo thể thao</li>
            <li>Giày chạy bộ</li>
            <li>Labubu</li>
            <li>Đĩa game</li>
            <li>Băng đĩa</li>
          </ul>
        </div>
        <Link to="/products" className="flex items-center justify-center">
          <CartIcon width={26} height={26} color="#ffffff" />
        </Link>
      </div>
    </header>
  );
};
