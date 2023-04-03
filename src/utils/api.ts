import axios, { AxiosResponse } from "axios";
import { IMXURL, MoralisURL, moralisAPIkey } from "./blockchain.js";
import { IMXAsset, Asset, EVMAsset } from "../types";
import { convertEVMAssetsToAsset, convertIMXAssetsToAsset } from "./utils.js";

export async function getIMXTokenBalances(address: string, collectionAddress: string, network: number): Promise<IMXAsset[]> {
  if (network == 5000 || 5001) {
    //Request the token balances from the IMX API for the given address
    console.log("Getting IMX token balances...");
    const response: AxiosResponse = await axios.get(IMXURL(address, collectionAddress, network), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const balancesresult = await response.data.result;

    //Type the whole array and sort everything according to the token_id
    const balancesresultarray: IMXAsset[] = balancesresult.map((element: any) => ({
      token_address: element.token_address,
      token_id: parseInt(element.token_id),
      id: element.id,
      user: element.user,
      status: element.status,
      uri: element.uri,
      name: element.name,
      description: element.description,
      image_url: element.image_url,
      metadata: element.metadata,
      collection: element.collection,
      created_at: new Date(element.created_at),
      updated_at: new Date(element.updated_at),
    }));
    balancesresultarray.sort((a: IMXAsset, b: IMXAsset) => a.token_id - b.token_id);

    return balancesresultarray;
  } else {
    throw new Error("Invalid chain_id. Please provide a valid chain_id (5000 or 5001).");
  }
}

export async function getEVMTokenBalances(address: string, collectionAddress:string, network:number): Promise<EVMAsset[]> {
  console.log("Getting EVM token balances...");
  const response: AxiosResponse = await axios.get(MoralisURL(address, collectionAddress, network), {
    headers: {
      accept: "application/json",
      "X-API-Key": moralisAPIkey,
    },
  });
  const balancesresult = await response.data.result;

    //Type the whole array and sort everything according to the token_id
    const balancesresultarray: EVMAsset[] = balancesresult.map((element: any) => ({
        token_address: element.token_address,
        token_id: parseInt(element.token_id),
        owner_of: element.owner_of,
        block_number: parseInt(element.block_number),
        block_number_minted: parseInt(element.block_number_minted),
        token_hash: element.token_hash,
        amount: element.amount,
        contract_type: element.contract_type,
        name: element.name,
        symbol: element.symbol,
        token_uri: element.token_uri,
        metadata: element.metadata,
        last_token_uri_sync: new Date(element.last_token_uri_sync),
        last_metadata_sync: new Date(element.last_metadata_sync),
        minter_address: element.minter_address,
        possible_spam: element.possible_spam,
        }));
    balancesresultarray.sort((a: EVMAsset, b: EVMAsset) => a.token_id - b.token_id);
    return balancesresultarray;
}

export async function getAssetTokenBalances(address:string, collectionAddress:string, network:number): Promise<Asset[]> {
  if (network== 5000 || 5001) {
    const imxassets = await getIMXTokenBalances(address, collectionAddress, network);
    return convertIMXAssetsToAsset(imxassets, network);
  } else {
    const evmassets = await getEVMTokenBalances(address, collectionAddress, network);
    return convertEVMAssetsToAsset(evmassets, network);
  }
}

export async function getAssetTokenBalancesRegular(address: string, chain_id:number) {
  const interval = setInterval(() => getAssetTokenBalances(address, chain_id), 5000);
  return () => clearInterval(interval);
}

async function main() {
  console.log(await getEVMTokenBalances("0x42c2d104C05A9889d79Cdcd82F69D389ea24Db9a", 137));
  //console.log(await getIMXTokenBalances("0x42c2d104C05A9889d79Cdcd82F69D389ea24Db9a", 5001));
}
main();
