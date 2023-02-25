//Key value pairs for the different chains, contains both the full length name and the shortened version used in the Moralis API requests
export const chains: { [key: number]: string[] } = {
    1: ["Ethereum","eth"],
    5: ["Goerli", "goerli"],
    56: ["Binance Smart Chain", "bsc"],
    97: ["Binance Smart Chain Testnet", "bsc testnet"],
    137: ["Polygon", "polygon"],
    250: ["Fantom", "fantom"],
    42161: ["Arbitrum", "arbitrum"],
    43114: ["Avalanche", "avalanche"],
    //polygon testnet
    80001: ["Mumbai", "mumbai"],
    11155111: ["Sepolia", "sepolia"],
}

//Network the frontend should be on, use the chain id
export const network: number = 56;
export const originCollectionAddress: string =  "0xeDC085dC8797AF5E75Ce5Fc7b2A929639A013635";

//Use the chain IDs to define to which IMX network to use. Ethereum=IMX mainnet, Goerli=IMX sandbox
export const destinationNetwork: number = 5;
const destinationCollectionAddress: string = "0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3";
const immutableURL: string = "https://api.sandbox.x.immutable.com/v1/assets?user=";
const immutableURLextension = "&collection=";

export const moralisAPIkey = "C9P2Jz8zrkYra6N6CSAGb49lw7WBbjbYfBOdO8AEAid8tnym6k3GhbV7kJc16wS3";

//Construct the GET request to the Moralis API
export const originMoralisURL = (address: string) => { 
    return "https://deep-index.moralis.io/api/v2/" + address + "/nft?chain=" + chains[network][1] + "&format=decimal&token_addresses%5B0%5D=" + originCollectionAddress;
}

export const destinationIMXURL = (address: string) => {
    return immutableURL + address + immutableURLextension + destinationCollectionAddress;
}

export const destinationScannerURL = (tokenid: string) => {
    if (destinationNetwork == 5) {
        return "https://immutascan.io/address/" + destinationCollectionAddress + "/" + tokenid;
    }
    else {
        return "";
    }
}