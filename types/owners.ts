import { User } from './users'

export enum OwnerType {
  INDIVIDUAL = 'INDIVIDUAL',
  COMPANY = 'COMPANY',
}
  

export interface OwnerListItem {
  id: number;
  user: User;
  reviews: unknown[];
  avgReview: number;
  type: OwnerType;
}