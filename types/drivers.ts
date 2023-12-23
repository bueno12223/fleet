import { BaseModel } from 'types'
import { Role } from './users'
import { FileType } from './files'


interface UserDetailItem extends BaseModel {
  id: number;
  phone: string;
  name: string;
  verified: boolean;
  profileImage: FileType;
  imageId: number;
  verificationCode: string;
  roles: Role[];
}

export interface DriverListItem {
  id: number;
  minPrice: number;
  birthday: Date;
  user: UserDetailItem;
}