import { ethers } from "ethers";
const providerUrl = process.env.PROVIDER_URL || "";
const provider = new ethers.providers.JsonRpcProvider(providerUrl);
// const contractAddress = "0x7965031031ceab380f9fd32d3ea46770d74141a9";

export default function getContractInstance(contractAddress, abi) {
  return new ethers.Contract(contractAddress, abi, provider);
}
