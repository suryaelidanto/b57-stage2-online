import { MyButtonProps } from "@/types/props/my-button-props";

export function MyButton({ text, ...props }: MyButtonProps) {
  return <button {...props}>{text}</button>;
}
