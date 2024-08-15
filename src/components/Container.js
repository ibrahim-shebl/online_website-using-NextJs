import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn("py-10 max-w-screen-xl mx-auto px-4 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default Container;
