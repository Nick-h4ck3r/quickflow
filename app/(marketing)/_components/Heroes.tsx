import Image from "next/image";
import React from "react";

type Props = {};

function Heroes({}: Props) {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]">
          <Image
            src={"/notes-pana.png"}
            fill
            className="object-contain dark:hidden"
            alt="documents"
          />
          <Image
            src={"/notes-pana-dark.png"}
            fill
            className="hidden object-contain dark:block"
            alt="documents"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Heroes;
