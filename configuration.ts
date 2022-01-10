export interface Config {
  streamerId: string | number;
  streamerName: string;
  api: string;
  primaryColor: string;
  secondaryColor: string;
  fontString: string;
  font: string;
  youtubeMetatag?: string;
  geoApi: string;
}

export const defaultConfig: Config = {
  streamerId: 23,
  streamerName: "topbonus",
  api: "https://compare.topadsservices.com",
  primaryColor: "#6716e0",
  secondaryColor: "#6716e0",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export let configuration: Config = {
  streamerId: 23,
  streamerName: "topbonus",
  api: "https://compare.topadsservices.com",
  primaryColor: "#6716e0",
  secondaryColor: "#6716e0",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export const setConfigurationFile = (newConfig: Config = configuration) => {
  configuration = newConfig;
};
