"use client";
import Image from "next/image";
import ReactSpeedometer from "react-d3-speedometer";
import { Selectcrypto } from "@/components/Selectcrypto";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-20 py-16 items-center">
      <Selectcrypto />

      <div className="text-center flex flex-col gap-5">
        <ReactSpeedometer
          maxValue={500}
          value={43}
          width={500}
          // ringWidth={0}
          needleColor="red"
          startColor="blue"
          segments={2}
          customSegmentLabels={[
            {
              text: "Bearish",
              // position: "INSIDE",
              position: "OUTSIDE",
              color: "#555",
            },
            {
              text: "Bullish",
              position: "OUTSIDE",
              color: "#555",
            },
          ]}
          endColor="green"
        />
        <p className="text-sm text-stone-700">
          This data is based of past 24 hr trends of the cryto
        </p>
      </div>
    </main>
  );
}
