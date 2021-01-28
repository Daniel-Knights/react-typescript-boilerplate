export type WeatherData = {
    base: string;
    clouds: Record<string, number>;
    cod: number;
    coord: Record<string, number>;
    dt: number;
    id: number;
    main: Record<string, number>;
    name: string;
    sys: Record<string, string | number>;
    timezone: number;
    visibility: number;
    weather: Record<string, string | number>[];
    wind: Record<string, number>;
};
