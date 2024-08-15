import { cn } from "@/lib/utils";

const Title = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold pb-5 border-b-[1px] border-b-zinc-400",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default Title;
