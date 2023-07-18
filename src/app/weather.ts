export interface Weather {
  location: Location;
  forecast: Forecast;
}

export interface Forecast {
  items: Item[];
  forecastDate: string;
  nextUpdate: string;
  source: string;
  point: string;
  fingerprint: string;
}

export interface Item {
  date: string;
  period: number;
  freshSnow?: number;
  weather: Weather;
  sunHours?: any;
  rainHours?: any;
  prec: Prec;
  temperature: Temperature;
  pressure: number;
  relativeHumidity: number;
  clouds: Clouds;
  wind: Wind;
  windchill: Windchill;
  snowLine: SnowLine;
  isNight: boolean;
}

export interface SnowLine {
  avg?: any;
  min?: any;
  max?: any;
  unit: string;
}

export interface Windchill {
  avg: number;
  min?: any;
  max?: any;
}

export interface Wind {
  unit: string;
  direction: string;
  text: string;
  avg: number;
  min?: any;
  max?: any;
  gusts: Gusts;
  significationWind: boolean;
}

export interface Gusts {
  value?: number;
  text?: string;
}

export interface Clouds {
  high: number;
  low: number;
  middle: number;
}

export interface Temperature {
  avg: number;
}

export interface Prec {
  sum: number;
  probability: number;
  sumAsRain?: any;
  class: number;
}

export interface Weather {
  state: number;
  text: string;
  icon: string;
}

export interface Location {
  code: string;
  name: string;
  timezone: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

