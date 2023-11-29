
interface BaseModel {
  createdAt: Date;
  updatedAt: Date;
}

interface Role extends BaseModel {
  id: number;
  name: string;
}

interface DriverDetailItem extends BaseModel {
  id: number;
  minPrice: number;
  birthday: Date;
}

interface UserDetailItem extends BaseModel {
  id: number;
  phone: string;
  name: string;
  verified: boolean;
  profileImage: File;
  driver: DriverDetailItem;
  owner: DriverDetailItem;
  imageId: number;
  verificationCode: string;
  roles: Role[];
}

export interface User extends UserDetailItem {
  verificationCode: string;
  roles: Role[];
}