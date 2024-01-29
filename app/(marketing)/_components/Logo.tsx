"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { redirect } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

function Logo() {
  return (
    <div
      onClick={() => redirect("/")}
      className="hidden items-center gap-x-2 md:flex"
    >
      <Image
        src={"/logo.jpg"}
        height={40}
        width={40}
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.jpg"}
        height={40}
        width={40}
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Quickflow</p>
    </div>
  );
}

export default Logo;
