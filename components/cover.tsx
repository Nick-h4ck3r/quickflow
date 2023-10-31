"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  return (
    <div
      className={cn(
        "group: relative h-[35vh] w-full",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && <Image src={url} fill alt="cover" className="object-cover" />}
    </div>
  );
};
