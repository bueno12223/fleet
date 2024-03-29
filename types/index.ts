export type RootStackParamList = {
  Home: string;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

export interface carListPropType {
  ammontPerDay: number,
  carPhoto: unknown,
  title: string,
  status: number,
  ownerRate: number,
  platforms: platforms,
  ownerData: UserProps
}
export interface platforms {
  uber?: boolean | undefined,
  indrive?: boolean | undefined,
  taxi?: boolean | undefined,
  didi?: boolean | undefined,
  open: boolean | undefined
}

export interface UserProps {
  _id: string,
  name: string,
  email: string,
  avatarUrl: unknown,
}


export type AutoCompleteType =
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'email'
  | 'name'
  | 'password'
  | 'postal-code'
  | 'street-address'
  | 'tel'
  | 'username'
  | 'off'
  | undefined;

export type textContentType =
  | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode'
  | undefined;

export  interface BaseModel {
  createdAt: Date;
  updatedAt: Date;
}

interface Link {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
}

interface Meta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Pagination<T> {
  links: Link;
  meta: Meta;
  items: T[];
}

export type DocumentType = 'all' | 'image/**' | 'audio' | 'video' | 'application/pdf' | 'plainText' | 'unknown' | 'pdf/**'
