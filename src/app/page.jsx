"use client";
import Image from "next/image";
import ReactSpeedometer from "react-d3-speedometer";
import { Selectcrypto } from "@/components/Selectcrypto";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [crypto, setCrypto] = useState("Ethereum");

  const handleChange = (value) => {
    setCrypto(value);
    console.log(crypto);
  };

  return (
    <main className="w-full flex flex-col gap-20 py-16 items-center">
      {/* <Selectcrypto /> */}
      <Select value={crypto} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a crypto" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select the crypto</SelectLabel>
            <SelectItem value="Ethereum">Etherium</SelectItem>
            <SelectItem value="Bitcoin">Bitcoin</SelectItem>
            <SelectItem value="Dogecoin">Dogecoin</SelectItem>
            <SelectItem value="Solana">Solana</SelectItem>

            {/* <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="text-center flex flex-col gap-5">
        <ReactSpeedometer
          maxValue={100}
          value={0}
          width={500}
          minValue={-100}
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
