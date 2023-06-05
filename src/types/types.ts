export type weatherTypes = {
  city: { name: string; country: string };
  list: Array<{
    dt: number;
    dt_txt:string;
    main: { temp: number; temp_min: number; temp_max: number; humidity: number };
    weather: Array<{ id: number; main: string; description: string; icon: string }>;
    wind: { speed: number };
  }>;
};

export type currentweatherTypes = {
  name: string;
  dt: number;
  dt_txt:string;
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  weather: Array<{ id: number; main: string; description: string; icon: string }>;
};

