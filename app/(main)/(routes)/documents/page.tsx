"use client";

//  import hooks
import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";

//  import components
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

function Page() {
  const { user } = useUser();
  const router = useRouter();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((docId) => {
      router.push(`/documents/${docId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a note.",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.png"}
        width={300}
        height={300}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        width={300}
        height={300}
        alt="empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Quickflow
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" /> Create a note
      </Button>
    </div>
  );
}

export default Page;
