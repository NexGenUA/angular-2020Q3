interface Production {
  production: boolean;
  api_url: string;
  url: string;
  email: RegExp;
  password: RegExp;
  YOUTUBE_API_KEY: string;
}

export const environment: Production = {
  url: 'https://www.googleapis.com',
  production: true,
  email: /^(?:[a-z0-9_\.\-])+\@(?:(?:[a-z0-9\-])+\.)+(?:[a-z0-9]{2,4})+$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\-_@$!%*?&#\.,;\:\[\]\{\}])[A-Za-z\d\+\-_@$!%*?&#\.,;\:\[\]\{\}]{8,}$/,
  YOUTUBE_API_KEY: 'AIzaSyAZ9nOg57SGLc5cPI6FAQ8-pfpBYPpr0Ig',
  api_url: 'https://winged-octagon-287518.oa.r.appspot.com'
};
