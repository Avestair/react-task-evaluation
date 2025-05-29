interface subMenuitemProps {
  name: string;
  active?: boolean;
}

export default function SubMenuItem({ name, active }: subMenuitemProps) {
  return (
    <div className="flex hover:bg-my-bg transition-all duration-500 cursor-pointer group gap-4">
      <span
        className={`transition-all duration-500 ${
          active
            ? "bg-my-primary"
            : "bg-my-alternative-gray group-hover:bg-my-primary"
        } w-[3px]`}
      ></span>
      <p
        className={`text-my-text pt-2 pb-2 ${
          active ? "font-semibold" : ""
        } text-[15px]`}
      >
        {name}
      </p>
    </div>
  );
}
