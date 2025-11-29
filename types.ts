export interface TabOption {
  id: string;
  label: string;
}

export interface VideoItem {
  id: number;
  shopName: string;
  location: string;
  title: string;
  date: string;
  thumbnailUrl: string;
  isNew?: boolean;
}

export interface RankingItem {
  rank: number;
  id: number;
  name: string;
  description: string; // Used for "Shop Name" in cast list or "Subtitle" in shop list
  location: string; // Hanoi, HCM, etc.
  tags: string[];
  imageUrl: string;
  isCast?: boolean; // Changes layout slightly
  shopName?: string; // Specific for cast ranking
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  imageUrl: string;
}