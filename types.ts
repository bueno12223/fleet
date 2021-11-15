export type RootStackParamList = {
  Home: String;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
