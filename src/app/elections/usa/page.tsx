import React from "react";
import Progressbar from "@/components/Progressbar";
import Link from "next/link";

import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="flex flex-col gap-3 items-center my-8">
      <div className="flex w-[500px] border-slate-200 border-2 mx-auto p-8 rounded-lg flex-col gap-7">
        <div className="flex gap-5 font-extrabold text-sm items-center">
          <Progressbar progess={80} />
          <span>Donald Trumph</span>
        </div>
        <div className="flex gap-5 font-extrabold text-sm items-center">
          <Progressbar progess={80} />
          <span>Donald Trumph</span>
        </div>
        <div className="flex gap-5 font-extrabold text-sm items-center">
          <Progressbar progess={80} />
          <span>Donald Trumph</span>
        </div>
        <div className="flex gap-5 font-extrabold text-sm items-center">
          <Progressbar progess={80} />
          <span>Donald Trumph</span>
        </div>
      </div>
      <p className="text-sm my-5">
        Usa Election Predictions accoring to last 24hr data
      </p>
      <p>
        See India prections{" "}
        <Link
          className="text-blue-500 hover:underline "
          href="/elections/india"
        >
          here
        </Link>{" "}
      </p>
    </div>
  );
};

export default page;
