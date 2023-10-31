"use client";

import { Dialog, DialogHeader, DialogContent } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <div>
            TODO: upload image
        </div>
      </DialogContent>
    </Dialog>
  );
};
