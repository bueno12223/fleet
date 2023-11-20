export interface User {
  id: number;
  phone: string;
  name: string;
  verified: boolean;
  verificationCode?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}