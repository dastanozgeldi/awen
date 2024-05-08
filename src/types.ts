export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  artists: {
    id: string;
    name: string;
  }[];
}
