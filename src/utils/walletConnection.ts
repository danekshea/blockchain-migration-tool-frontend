import { AlchemyProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import {
    ImmutableX,
    Config,
    createStarkSigner,
    generateStarkPrivateKey,
    WalletConnection
} from "@imtbl/core-sdk"
import { GetEnv } from "./getEnv"

const config = Config.SANDBOX; // or Config.PRODUCTION
const ethNetwork = "goerli" // Or 'mainnet'

// Construct the api client
export const Client = new ImmutableX(config);

// Create Ethereum signer
const provider = new AlchemyProvider(ethNetwork, GetEnv("ALCHEMY_API_KEY"));
let l1Wallet: Wallet;
const savedEthKey = GetEnv("ETH_PRIVATE_KEY");

if (savedEthKey === "") {
    l1Wallet = Wallet.createRandom() // create a random wallet if there's no saved key
} else {
    l1Wallet = new Wallet(savedEthKey); // load wallet if there is a saved key
}  

// Export it out for other functions
export const L1Wallet = l1Wallet;

const ethSigner = L1Wallet.connect(provider);

// Create Stark signer
const savedStarkKey = GetEnv("SAVED_STARK_KEY");
let starkPrivateKey: string;
if (savedStarkKey === "") {
    starkPrivateKey = generateStarkPrivateKey(); // WARNING!!! This is non-deterministic.
} else {    
    starkPrivateKey = savedStarkKey;
}

const starkSigner = createStarkSigner(starkPrivateKey);

export const walletConnection: WalletConnection = { ethSigner, starkSigner }
