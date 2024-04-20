// import { GoogleGenerativeAI } from "@google/generative-ai";
import getContractInstance from "@/utils/EthProvider";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import BytestoString from "@/utils/BytestoString";
import morphAbi from "@/abis/morphAbi.json";
import { ethers } from "ethers";
import { getMorphContact } from "@/utils/EthProvider";
import contractAbi from "@/abis/contractAbi.json";
import { morphProviderFn } from "@/utils/EthProvider";
import jsonValueToBytes32 from "@/utils/JsontoBytes32";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API || "");

export const POST = async (req: Request, res: Response) => {
  try {
    const contract = getContractInstance(
      "0x7965031031ceab380f9fd32d3ea46770d74141a9",
      contractAbi
    );
    const data = await contract.s_lastResponse();
    const newsData = BytestoString(data);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Out if these parties BJP Bharatiya Janata Party ,BSP Bahujan Samaj Party ,CPI Communist Party of India ,CPM Communist Party of India (Marxist) ,INC Indian National Congress, NCP Nationalist Congress Party. which parties have ehat percentage of chances of winning the upcoming elections in India? Add the parties that are not mentioned here as well. Also here are some recent news headlines: ${newsData} use this data as well for prediction, Just return Party names and their winning percentage in string seperated by comma and try to keep it as less in bytes as possible like remove white spaces and don't add percentage signs or newline characters just use comma to seperate parties and - to praty from their percentage example BJP:4,INC:2.`;
    const result = await model.generateContent(prompt);
    // console.log(result);
    const response = await result.response;
    const morphContract = getMorphContact(
      "0x57f1e46aC5DBd2A7c2c356E39066212E84A0C114",
      morphAbi
    );
    const morphProvider = morphProviderFn();
    const wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY || "",
      morphProvider
    );

    const contractWithSigner = wallet.connect(morphProvider);

    const bytes32 = jsonValueToBytes32(response.text());
    //const tx = await morphContract.setData(bytes32);
    const transactionParameters = {
      to: "0x57f1e46aC5DBd2A7c2c356E39066212E84A0C114",
      data: morphContract.interface.encodeFunctionData("setData", [bytes32]),
    };

    try {
      const txHash = await wallet.sendTransaction(transactionParameters);
      console.log(`Transaction hash: ${txHash.hash}`);

      const receipt: any = await txHash.wait();
      console.log(`Transaction confirmed at block: ${receipt.blockNumber}`);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }

    const text = response.text();
    console.log(text);

    console.log(newsData);

    return NextResponse.json({ text });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ err });
  }
};
