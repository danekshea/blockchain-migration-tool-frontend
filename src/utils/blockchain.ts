import { chainDetails } from "../types";

//Network the frontend should be on, use the chain id
export const originChain:number = 137;
export const originCollectionAddress: string =  "0x0551b1C0B01928Ab22A565b58427FF0176De883C";

//Use the chain IDs to define to which IMX network to use. Ethereum=IMX mainnet, Goerli=IMX sandbox
export const destinationChain:number = 5001;
export const destinationCollectionAddress: string = "0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3";

export const moralisAPIkey:string = "C9P2Jz8zrkYra6N6CSAGb49lw7WBbjbYfBOdO8AEAid8tnym6k3GhbV7kJc16wS3";

export const abi:string = JSON.parse(
    '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]'
);

//Key value pairs for the different chains, contains chain details
export const chains: { [key: number]: chainDetails } = {
    1: {name: "Ethereum", shortName: "eth", img: "eth.svg"},
    5: {name: "Goerli", shortName: "goerli", img: "eth.svg"},
    56: {name: "BNB Chain", shortName: "bnb", img: "bnb.svg"},
    97: {name: "BNB Chain Testnet", shortName: "bnb testnet", img: "bnb.svg"},
    137: {name: "Polygon", shortName: "polygon", img: "polygon.svg"},
    250: {name: "Fantom", shortName: "fantom", img: "fantom.svg"},
    5000: {name: "ImmutableX", shortName: "imx", img: "imx.png"},
    5001: {name: "ImmutableX Testnet", shortName: "imx testnet", img: "imx.png"},
    42161: {name: "Arbitrum", shortName: "arbitrum", img: "arbitrum.svg"},
    43114: {name: "Avalanche", shortName: "avalanche", img: "avalanche.png"},
    //polygon testnet
    80001: {name: "Mumbai", shortName: "mumbai", img: "polygon.svg"},
    11155111: {name: "Sepolia", shortName: "sepolia", img: "eth.svg"},
}

//Construct the GET request to the Moralis API
export const MoralisURL = (address:string, collectionAddress:string, network:number) => { 
    return "https://deep-index.moralis.io/api/v2/" + address + "/nft?chain=" + chains[network].shortName + "&format=decimal&token_addresses%5B0%5D=" + collectionAddress;
}

export const IMXURL = (address:string, collectionAddress:string, network:number) => {
    if(network == 5000) {
        return "https://api.x.immutable.com/v1/assets?user=" + address + "&collection=" + collectionAddress;
    }
    else if(network == 5001) {
        return "https://api.sandbox.x.immutable.com/v1/assets?user=" + address + "&collection=" + collectionAddress;
    }
    else {
        throw new Error("Invalid chain_id. Please provide a valid chain_id (5000 or 5001).");
  }
}

//Return a token scanner URL, keep in mind that IMX sandbox doesn't have a scanner so we don't return anything
export const tokenScannerURL = (collectionAddress: string, tokenid: string, network: number) => {
    if (network == 1) {
        return "https://etherscan.io/nft/" + collectionAddress + "/" + tokenid;
    }
    else if(network == 5) {
        return "https://goerli.etherscan.io/nft/" + collectionAddress + "/" + tokenid;
    }
    else if(network == 56) {
        return "https://bscscan.com/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 97) {
        return "https://testnet.bscscan.com/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 137) {
        return "https://polygonscan.com/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 250) {
        return "https://ftmscan.com/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 5000) {
        return "https://immutascan.io/address/" + collectionAddress + "/" + tokenid;
    }
    else if(network == 42161) {
        return "https://arbiscan.io/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 43114) {
        return "https://snowtrace.io/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 80001) {
        return "https://mumbai.polygonscan.com/token/" + collectionAddress + "?a=" + tokenid;
    }
    else if(network == 11155111) { 
        return "https://sepolia.etherscan.io/token/" + collectionAddress + "?a=" + tokenid;
    }
    else {
        return "";
    }
}

//Same as for token scanner URL, but for addresses, we need to account for the fact that IMX sandbox doesn't have a scanner
export const addressScannerURL = (address:string, network:number) => {
    if (network == 1) {
        return "https://etherscan.io/address/" + address;
    }
    else if(network == 5) {
        return "https://goerli.etherscan.io/address/" + address;
    }
    else if(network == 56) {
        return "https://bscscan.com/address/" + address;
    }
    else if(network == 97) {
        return "https://testnet.bscscan.com/address/" + address;
    }
    else if(network == 137) {
        return "https://polygonscan.com/address/" + address;
    }
    else if(network == 250) {
        return "https://ftmscan.com/address/" + address;
    }
    else if(network == 5000) {
        return "https://immutascan.io/address/" + address;
    }
    else if(network == 42161) {
        return "https://arbiscan.io/address/" + address;
    }
    else if(network == 43114) {
        return "https://snowtrace.io/address/" + address;
    }
    else if(network == 80001) {
        return "https://mumbai.polygonscan.com/address/" + address;
    }
    else if(network == 11155111) { 
        return "https://sepolia.etherscan.io/address/" + address;
    }
    else {
        return "";
    }
}
