import { MyButtonProps } from "../types/props/MyButtonProps";

export function MyButton({ text, ...props }: MyButtonProps) {
  return <button {...props}>{text}</button>;
}
