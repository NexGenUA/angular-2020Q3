export const environment: { production: boolean, url: URL, email: RegExp, password: RegExp } = {
  url: new URL('https://api-rslang.herokuapp.com/'),
  production: true,
  email: /^(?:[a-z0-9_\.\-])+\@(?:(?:[a-z0-9\-])+\.)+(?:[a-z0-9]{2,4})+$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\-_@$!%*?&#\.,;\:\[\]\{\}])[A-Za-z\d\+\-_@$!%*?&#\.,;\:\[\]\{\}]{8,}$/,
};
