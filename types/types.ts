export interface updateParams {
  longUrl: string;
  id: string;
}

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

export interface ButtonProps {
  onClick: () => void;
  label: string;
  isLoading: boolean;
}

export interface EditButtonProps {
  label: string;
  loading: boolean;
}

export interface User {
  email: string;
  password: string;
}
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface SignUp {
  email: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface Url {
  id: string;
  longUrl: string;
  shortUrl: string;
  date: number;
  clickCount: number;
  posts: string;
}

export interface UrlState {
  urls: Url[];
  isLoading: boolean;
}
