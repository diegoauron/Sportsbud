export interface Teams {
  id: string;
  name: string;
  description: string;
  sport: string
  location: string;
  contact: string;
  latitude: Number;
  longitude: Number;
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  }
  isActive: boolean;
  creator: string;
}
