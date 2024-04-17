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
