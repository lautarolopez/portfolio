import { ColorMode } from "@/types";

type Props = {
  height?: number;
  width?: number;
  colorMode: ColorMode;
  className?: string;
};

export default function CheckIcon({
  height = 40,
  width = 40,
  colorMode,
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 448 512"
      className={`${
        colorMode === "regular"
          ? "fill-primary-light dark:fill-primary-dark"
          : "dark:fill-primary-light fill-primary-dark"
      } ${className}`}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
}
