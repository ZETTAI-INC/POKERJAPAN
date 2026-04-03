export interface Airport {
  name: string;
  distance: string;
  access: string;
}

export interface Stake {
  game: string;
  blind: string;
  buyIn: string;
  notes: string;
}

export interface Tournament {
  name: string;
  frequency: string;
  buyIn: string;
}

export interface JunketItem {
  label: string;
  value: string;
}

export interface JunketInfo {
  description: string;
  items: JunketItem[];
}

export interface Hotel {
  name: string;
  rating: string;
  rooms: string;
  amenities: string[];
}

export interface Dining {
  name: string;
  type: string;
  price: string;
}

export interface JapaneseSupport {
  level: 'excellent' | 'good' | 'limited' | 'none';
  details: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  approxJPY: string;
}

export type Recommendation = 'highly-recommended' | 'recommended' | 'standard' | 'niche';

export interface VenueData {
  name: string;
  nameJa: string;
  country: string;
  countryName: string;
  flag: string;
  city: string;
  address: string;
  mapQuery: string;
  photo: string;
  description: string;
  airport: Airport;
  hours: string;
  japaneseSupport: JapaneseSupport;
  stakes: Stake[];
  rake: string;
  gameTypes: string[];
  tables: string;
  tournaments: Tournament[];
  junketInfo: JunketInfo;
  hotel: Hotel;
  dining: Dining[];
  recommendation: Recommendation;
  pros: string[];
  cons: string[];
  tipsForJapanese: string[];
  dressCode: string;
  smoking: string;
  wifi: string;
  currency: Currency;
  nearbyVenues: string[];
  tags: string[];
  lastUpdated: string;
}

export type VenueDataMap = Record<string, VenueData>;
