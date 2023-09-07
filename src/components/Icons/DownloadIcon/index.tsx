import { ColorMode } from "@/types";

type Props = {
  height?: number;
  colorMode: ColorMode;
};

export default function DownloadIcon({ height = 40, colorMode }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 384 512"
      className={`${
        colorMode === "regular"
          ? "fill-primary-light dark:fill-primary-dark"
          : "dark:fill-primary-light fill-primary-dark"
      }`}
    >
      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </svg>
  );
}
