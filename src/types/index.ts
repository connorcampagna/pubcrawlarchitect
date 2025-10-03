// Core types for the PubCrawl Architect application

export interface Venue {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
  priceLevel?: number;
  photoUrl?: string;
  category?: string;
  visited?: boolean;
}

export interface PubCrawl {
  id: string;
  name: string;
  createdBy: string;
  createdAt: Date;
  venues: Venue[];
  participants: string[];
  status: 'planning' | 'active' | 'completed';
}

export interface RouteInfo {
  distance: number; // in meters
  duration: number; // in minutes
  path: google.maps.LatLng[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
