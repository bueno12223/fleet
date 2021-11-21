import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Home: String;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

export interface carListPropType {
  category: String;
  description: String;
  id: Number;
  image: ImageSourcePropType;
  price: Number;
  rating: {
    count: Number;
    rate: Number;
  };
  title: String
}
