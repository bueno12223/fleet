import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Home: String;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

export interface carListPropType {
  ammontPerDay: Number,
  carPhoto: any,
  title: String,
  status: Number,
  ownerRate: Number,
  platforms: platforms,
  ownerData: UserProps
}
export interface platforms {
  uber?: Boolean | undefined,
  indrive?: Boolean | undefined,
  taxi?: Boolean | undefined,
  didi?: Boolean | undefined,
  open: Boolean | undefined
}

export interface UserProps {
  _id: String,
  name: String,
  email: String,
  avatarUrl: any,
}
