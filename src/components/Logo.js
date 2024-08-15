import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className, spanClassName }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",
        className
      )}
    >
      <span
        className={cn(
          "bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 group-hover:bg-blue-700 duration-200",
          spanClassName
        )}
      >
        H
      </span>
      eka
    </Link>
  );
};

export default Logo;
