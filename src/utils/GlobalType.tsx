export type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

export type Category = {
  name: string;
  activities: Array<CategoryActivity>;
};

export type CategoryActivity = {
  title: string;
};

export type Highlight = {
  image: string;
  title: string;
  description: string;
};

export type HighlightActivities = {
  image: string;
  name: string;
  description: string;
  activities: Array<Activity>;
};

export type Activity = {
  name: string;
};

type DetailRoute = {
  highlight: Highlight;
  showBackButton: boolean;
};

export type RootStackParamList = {
  // Home: undefined;
  Detail: DetailRoute;
  // Add other routes if needed
};
