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
  const [crypto, setCrypto] = useState<string>("Ethereum");

  const handleChange = (value: string) => {
    setCrypto(value);
    console.log(crypto);
  };

  return (
    <div className="w-full flex flex-col gap-20 py-12 items-center">
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

      <div className="text-center hidden md:flex flex-col gap-5">
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

              color: "#fff",
            },
            {
              text: "Bullish",

              color: "#fff",
            },
          ]}
          endColor="green"
        />
        <p className="text-sm text-stone-700">
          This data is based of past 24 hr trends of the cryto
        </p>
      </div>
      <div className="text-center md:hidden  flex flex-col gap-3">
        <ReactSpeedometer
          maxValue={100}
          value={0}
          width={350}
          minValue={-100}
          // ringWidth={0}
          needleColor="red"
          startColor="blue"
          segments={2}
          customSegmentLabels={[
            {
              text: "Bearish",
              // position: "INSIDE",

              color: "#fff",
            },
            {
              text: "Bullish",

              color: "#fff",
            },
          ]}
          endColor="green"
        />
        <p className="text-sm text-stone-700">
          This data is based of past 24 hr trends of the cryto
        </p>
      </div>
      <p className="text-sm my-5">Will make this page functional in few days</p>
    </div>
  );
}
