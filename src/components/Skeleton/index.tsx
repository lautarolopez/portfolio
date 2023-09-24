type Props = {
  height?: number;
  width?: number;
  className?: string;
};

export default function Skeleton({
  width = 40,
  height = 40,
  className = "",
}: Props) {
  return (
    <div
      className={`h-[${height}px] w-[${width}px] rounded-md animate-pulse animate bg-slate-300 ${className}`}
    ></div>
  );
}
