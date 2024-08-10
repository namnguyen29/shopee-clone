import { UserEnum } from '@app-shared/enums';

export type User = {
  roles: Array<UserEnum.Admin | UserEnum.User>;
  _id: string;
  email: string;
  createAt: Date;
  updateAt: Date;
  __v?: number;
  address?: string;
  phone?: string;
  name?: string;
  date_of_birth?: string | null;
};
