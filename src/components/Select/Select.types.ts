export interface SelectType {
  id: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}
