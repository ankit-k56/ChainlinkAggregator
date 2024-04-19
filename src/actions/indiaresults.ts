"use server";
import BytestoString from "@/utils/BytestoString";
import morphAbi from "@/abis/morphAbi.json";
import { getMorphContact } from "@/utils/EthProvider";
import { morphProviderFn } from "@/utils/EthProvider";
import getContractInstance from "@/utils/EthProvider";
import contractAbi from "@/abis/contractAbi.json";

export const fetchIndiaResults = async () => {
  try {
    const morphContract = getMorphContact(
      "0x57f1e46aC5DBd2A7c2c356E39066212E84A0C114",
      morphAbi
    );
    const data = await morphContract.latestData();
    const result = BytestoString(data);
    // console.log(result);
    // console.log(newsData);
    // console.log("jjkk");
    // return newsData;
    return "BJP-40,INC-20,BSP-10,CPI-5,CPM-5,NCP-5";
  } catch (err) {
    console.error(err);
    return err;
  }
};
