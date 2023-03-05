interface chainDetails {
    name: string,
    shortName: string,
    img: string
}

//Key value pairs for the different chains, contains chain details
export const chains: { [key: number]: chainDetails } = {
    1: {name: "Ethereum", shortName: "eth", img: "eth.svg"},
    5: {name: "Goerli", shortName: "goerli", img: "eth.svg"},
    56: {name: "Binance Smart Chain", shortName: "bsc", img: "bnb.svg"},
    97: {name: "Binance Smart Chain Testnet", shortName: "bsc testnet", img: "bnb.svg"},
    137: {name: "Polygon", shortName: "polygon", img: "polygon.svg"},
    250: {name: "Fantom", shortName: "fantom", img: "fantom.svg"},
    42161: {name: "Arbitrum", shortName: "arbitrum", img: "arbitrum.svg"},
    43114: {name: "Avalanche", shortName: "avalanche", img: "avalanche.png"},
    //polygon testnet
    80001: {name: "Mumbai", shortName: "mumbai", img: "polygon.svg"},
    11155111: {name: "Sepolia", shortName: "sepolia", img: "eth.svg"},
}

//Network the frontend should be on, use the chain id
export const originNetwork: number = 56;
export const originCollectionAddress: string =  "0xf5aeac3d8e4313199ca1804b8d91ff25113137af";

//Use the chain IDs to define to which IMX network to use. Ethereum=IMX mainnet, Goerli=IMX sandbox
export const destinationNetwork: number = 5;
const destinationCollectionAddress: string = "0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3";
const immutableURL: string = "https://api.sandbox.x.immutable.com/v1/assets?user=";
const immutableURLextension = "&collection=";

export const moralisAPIkey = "C9P2Jz8zrkYra6N6CSAGb49lw7WBbjbYfBOdO8AEAid8tnym6k3GhbV7kJc16wS3";

export const abi = JSON.parse(
    '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]'
);

//Construct the GET request to the Moralis API
export const originMoralisURL = (address: string) => { 
    return "https://deep-index.moralis.io/api/v2/" + address + "/nft?chain=" + chains[originNetwork].shortName + "&format=decimal&token_addresses%5B0%5D=" + originCollectionAddress;
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

export const originScannerURL = (collectionAddress: string, tokenid: string, network: number) => {
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
