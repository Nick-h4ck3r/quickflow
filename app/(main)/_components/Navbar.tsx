"use client";

import { useMutation, useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Title } from "./Title";
import { Banner } from "./Banner";
import { Menu } from "./Menu";

import { Button } from "@/components/ui/button";
import { Copy, MenuIcon } from "lucide-react";
import { Publish } from "./Publish";
import { toast } from "sonner";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

function Navbar({ isCollapsed, onResetWidth }: NavbarProps) {
  const params = useParams();
  const router = useRouter();
  const copy = useMutation(api.documents.copy);
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <div className="mt-1 flex w-full items-center justify-between bg-background px-3 py-2 dark:bg-[#1f1f1f]">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </div>
    );
  }

  if (document === null) {
    return null;
  }

  const onCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    const promise = copy({
      title: `Copy of ${document?.title}`,
      content: document?.content,
      coverImage: document?.coverImage,
      icon: document?.icon,
      parentDocument: document?.parentDocument,
    }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });
    toast.promise(promise, {
      loading: "Copying a new note...",
      success: "Note copied!",
      error: "Failed to copy the note.",
    });
  };
  return (
    <>
      <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-[#1f1f1f]">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}

        <div className="flex w-full items-center justify-between">
          <Title initialData={document} />
          <div className="flex items-center gap-x-2">
            <Button size={"sm"} variant={"ghost"} onClick={onCopy}>
              <Copy className="h-4 w-4 cursor-pointer" />
            </Button>
            <Publish initialData={document} />
            <Menu documentId={document._id} />
          </div>
        </div>
      </nav>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
}

export default Navbar;
