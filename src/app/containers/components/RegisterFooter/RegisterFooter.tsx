import { useId } from 'react';

import clsx from 'clsx';

import {
  aboutShopee,
  area,
  downloadShopeeAt,
  goodsCare,
  payments,
  policies,
  socialNetworks,
  transportUnit
} from '@app-shared/constants';
import styles from './RegisterFooter.module.scss';

export const RegisterFooter = () => {
  const footerId = useId();

  return (
    <footer className="w-[100%] bg-sp-gray-0 text-sp-black-alpha-65">
      <section className="mx-auto grid max-w-7xl grid-cols-1 p-[5px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="p-[5px]">
          <h3 className="mb-5 mt-10 text-xs font-bold">{goodsCare.title}</h3>
          <ul>
            {goodsCare.data.map((item, index) => (
              <li key={`${index}-${footerId}`} className="mb-3">
                <a href={item.url} className="text-xs hover:text-sp-orange-0">
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-[5px]">
          <h3 className="mb-5 mt-10 text-xs font-bold">{aboutShopee.title}</h3>
          <ul>
            {aboutShopee.data.map((item, index) => (
              <li key={`${index}-${footerId}`} className="mb-3">
                <a href={item.url} className="text-xs hover:text-sp-orange-0">
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-[5px]">
          <div className="payments-wrapper">
            <h3 className="mb-5 mt-10 text-xs font-bold">{payments.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {payments.data.map((item, index) => (
                <li
                  className="bg-white shadow-sp-alpha-20 inline-block rounded-sm p-1"
                  key={`${index}-${footerId}`}
                >
                  <img src={item.url} alt="logo" />
                </li>
              ))}
            </ul>
          </div>

          <div className="transport-wrapper">
            <h3 className="mt-10 text-xs font-bold">{transportUnit.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {transportUnit.data.map((item, index) => (
                <li
                  className="bg-white shadow-sp-alpha-20 inline-block rounded-sm p-1"
                  key={`${index}-${footerId}`}
                >
                  <img src={item.url} alt="logo" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="socialNetworks-wrapper p-[5px]">
          <h3 className="mb-5 mt-10 text-xs font-bold">{socialNetworks.title}</h3>
          <ul className="flex flex-col gap-3 text-xs">
            {socialNetworks.data.map((item, index) => (
              <li
                className="inline-flex items-center gap-2 hover:text-sp-orange-0"
                key={`${index}-${footerId}`}
              >
                <img src={item.imgSrc} alt="sns-logo" />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10 p-[5px]">
          <h3 className="mb-5 mt-10 text-xs font-bold">{downloadShopeeAt.title}</h3>
          <div className="flex">
            <a
              className="bg-white shadow-sp-alpha-20 mr-3 inline-block rounded-sm p-1"
              href={downloadShopeeAt.data[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={downloadShopeeAt.data[0].imgSrc} alt="sns-logo" />
            </a>
            <ul className="flex flex-col gap-2">
              {downloadShopeeAt.data.slice(1).map((item, index) => (
                <li key={`${index}-${footerId}`} className="bg-white shadow-sp-alpha-20 block p-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.imgSrc} alt="sns-logo" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div
        className={clsx(
          'text-sp-black-alpha-54 m-w-[2.5rem]',
          'mx-auto flex w-[100%] max-w-7xl flex-col items-center justify-between gap-2 py-10 md:flex-row',
          styles.area
        )}
      >
        <p className="text-sm">© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
        <div className="flex flex-col items-center gap-2 text-sm md:flex-row">
          <p>{area.title}</p>
          <ul className="flex flex-col gap-3 md:flex-row md:gap-0">
            {area.data.map((item, idx) => (
              <li
                className={clsx(styles.areaBorderRight, 'block px-2 md:inline-block')}
                key={`${idx}-${useId}`}
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="w-full mx-auto max-w-7xl px-1 py-10 text-center">
        <ul className="policies mb-10 flex items-center justify-center text-xs">
          {policies.map((policy, index) => (
            <li
              className={clsx(styles.areaBorderRight, 'px-5 uppercase leading-6')}
              key={`${index}-${useId}`}
            >
              <span>{policy}</span>
            </li>
          ))}
        </ul>

        <div className="goverment flex items-center justify-center gap-10">
          <a target="_blank" rel="noopener noreferrer" href="https://google.com">
            <div
              className={clsx(
                'bgPosition h-10 w-[7.5rem] bg-[url("/all-logo.png")]',
                styles.bgPositionGov
              )}
            ></div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://google.com">
            <div
              className={clsx(
                'bgPosition h-10 w-[7.5rem] bg-[url("/all-logo.png")]',
                styles.bgPositionGov
              )}
            ></div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://google.com">
            <div
              className={clsx(
                'bgPosition w-12 h-12 bg-[url("/all-logo.png")]',
                styles.bgPositionNoFake
              )}
            ></div>
          </a>
        </div>

        <div className="mb-6 mt-2 text-xs">Công ty TNHH Shopee</div>

        <p className="mb-2 text-xs">
          Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận
          Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
          cskh@hotro.shopee.vn
        </p>
        <p className="mb-2 text-xs">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
        <p className="mb-2 text-xs">
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày
          10/02/2015
        </p>
        <p className="mb-2 text-xs">© 2014 - This is a project for study purposes</p>
      </section>
    </footer>
  );
};
