import { FileType } from './files'
import { OwnerListItem } from './owners'

export interface CarListItem {
  id: number;
  brand: Brand;
  model: string;
  year: number;
  km: number;
  pricePerDay: number;
  owner: OwnerListItem;
  mainImage: {
    image: FileType
  };
}

export interface Brand {
  id: number;
  name: string;
}