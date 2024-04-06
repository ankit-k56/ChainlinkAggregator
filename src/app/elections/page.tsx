import React from "react";
import Progressbar from "@/components/Progressbar";

const page = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex w-[500px] border-slate-200 border-2 mx-auto p-8 rounded-lg flex-col gap-7">
        <Progressbar progess={80} />
        <Progressbar progess={80} />
        <Progressbar progess={80} />
        <Progressbar progess={80} />
        <Progressbar progess={80} />
        <Progressbar progess={80} />
        <Progressbar progess={4} />
      </div>
      <p>Usa Election Results</p>
    </div>
  );
};

export default page;
