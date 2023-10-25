"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Streamline your ideas and tasks, effortlessely. Welcome to{" "}
        <span className="underline">Quickflow</span>
      </h1>
      <h3 className="font-medium text-base sm:text-xl md:text-2xl">
        Quickflow is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Quickflow
        <ArrowRight className="h-4 w-4  ml-2"/>
      </Button>
    </div>
  );
};

export default Heading;
