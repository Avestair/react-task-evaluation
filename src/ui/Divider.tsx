interface dividerProps {
  className?: string;
  direction: "horazintal" | "vertical";
}

export default function Divider({ className, direction }: dividerProps) {
  return (
    <span
      className={`bg-gray-200 ${
        direction === "horazintal" ? "h-[1px]" : "w-[1px]"
      } ${className}`}
    ></span>
  );
}
