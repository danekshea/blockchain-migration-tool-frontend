import axios, { AxiosResponse } from 'axios';
import { destinationIMXURL } from "./blockchain.js";
import { IMXAssetResponse } from "../types";

export async function getDestinationTokenBalances(address: string): Promise<IMXAssetResponse[]> {
    console.log("Getting destination token balances...");
    //axios request to the URL of address
    const response: AxiosResponse = await axios.get(destinationIMXURL(address), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const balancesresult = await response.data.result;

    const balancesresultarray: IMXAssetResponse[] = balancesresult.map((element: any) => ({
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
    
    balancesresultarray.sort((a: IMXAssetResponse, b: IMXAssetResponse) => a.token_id - b.token_id);
    
    return balancesresultarray;
}

export async function getDestinationTokenBalancesRegular(address: string) {
    const interval = setInterval(() => getDestinationTokenBalances(address), 5000);
    return () => clearInterval(interval);
}

async function main() {
    console.log(await getDestinationTokenBalances("0x42c2d104C05A9889d79Cdcd82F69D389ea24Db9a"));
    //getDestinationTokenBalances("0x42c2d104C05A9889d79Cdcd82F69D389ea24Db9a");
}
main();