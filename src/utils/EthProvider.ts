import { ethers } from "ethers";
const providerUrl = process.env.PROVIDER_URL || "";
const provider = new ethers.JsonRpcProvider(providerUrl);
const morphProvider = new ethers.JsonRpcProvider(process.env.MORPH_URL || "");
// const contractAddress = "0x7965031031ceab380f9fd32d3ea46770d74141a9";

export default function getContractInstance(contractAddress: string, abi: any) {
  return new ethers.Contract(contractAddress, abi, provider);
}

export function getMorphContact(contractAddress: string, abi: any) {
  return new ethers.Contract(contractAddress, abi, morphProvider);
}
export function morphProviderFn() {
  //const signer = new ethers.Wallet(
  //  process.env.PRIVATE_KEY || "",
  //  morphProvider
  //);
  return morphProvider;
}
