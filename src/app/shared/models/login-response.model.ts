export interface LoginResponse {
  message: string;
  token: string;
  userId: string;
  name: string;
  email: string;
  refreshToken: string;
}
