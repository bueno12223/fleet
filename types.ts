
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
