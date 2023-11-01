"use client";

import Image from "next/image";
import { ImageIcon, XIcon } from "lucide-react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { useCoverImage } from "@/hooks/use-cover-image";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";  

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { cn } from "@/lib/utils";
import { useEdgeStore } from "@/lib/edgestore";


interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const coverImage = useCoverImage();
  const removeImage = useMutation(api.documents.removeCoverImage);
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onRemoveCoverImage = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }
    removeImage({ id: params.documentId as Id<"documents"> });
  };

  return (
    <div
      className={cn(
        "group relative h-[35vh] w-full",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}

      {url && !preview && (
        <div className="absolute bottom-5 right-5 z-50 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Change cover
          </Button>
          <Button
            onClick={onRemoveCoverImage}
            className="group/label text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <XIcon className="h-4 w-4" />
            <span className="ml-2 hidden transition group-hover/label:block">
              Remove
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="h-[12vh] w-full" />;
};
