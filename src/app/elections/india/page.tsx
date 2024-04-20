"use client";
import React, { useState, useEffect } from "react";
import Progressbar from "@/components/Progressbar";
import Link from "next/link";

type PartyDict = { [key: string]: number };

import { fetchIndiaResults } from "@/actions/indiaresults";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [partyDict, setPartyDict] = useState<PartyDict>({});
  const parseInputString = (inputString: string) => {
    const partyEntries = inputString.split(",");
    const newPartyDict: PartyDict = {};
    partyEntries.forEach((entry) => {
      const parts = entry.split(":");
      const partyName = parts[0];

      const partyNumber = parseInt(parts[1]);
      newPartyDict[partyName] = partyNumber;
    });
    setPartyDict(newPartyDict);
  };
  useEffect(() => {
    const fetchdata = async () => {
      const data = (await fetchIndiaResults()) as string;
      console.log(data);

      parseInputString(data);

      console.log(partyDict);
    };
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center my-8">
      <div className="flex w-[500px] border-slate-200 border-2 mx-auto p-8 rounded-lg flex-col gap-7">
        {Object.entries(partyDict).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex gap-5 font-extrabold text-sm items-center"
            >
              <div className=" flex w-full items-center gap-3">
                <Progressbar progess={value} />
                {!value ? <span>1%</span> : <span>{value}%</span>}
              </div>
              <span>{key}</span>
            </div>
          );
        })}
      </div>
      <p className="text-sm my-5">
        India Election Predictions accoring to last 24hr news data
      </p>
      <p>
        See Usa prections{" "}
        <Link className="text-blue-800 hover:underline " href="/elections/usa">
          here
        </Link>{" "}
      </p>
    </div>
  );
};

export default Page;
