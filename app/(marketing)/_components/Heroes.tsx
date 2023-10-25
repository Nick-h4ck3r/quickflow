import Image from "next/image";
import React from "react";

type Props = {};

function Heroes({}: Props) {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={"/documents.png"}
            fill
            className="object-contain dark:hidden"
            alt="documents"
          />
          <Image
            src={"/documents-dark.png"}
            fill
            className="hidden object-contain dark:block"
            alt="documents"
          />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            src={"/reading.png"}
            fill
            className="object-contain dark:hidden"
            alt="reading"
          />
          <Image
            src={"/reading-dark.png"}
            fill
            className="hidden object-contain dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
}

export default Heroes;
