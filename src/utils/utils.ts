import { Asset, EVMAsset, IMXAsset } from "../types";

export const convertIMXAssetsToAsset = (IMXAssets: IMXAsset[], chain_id: number): Asset[] => {
  return IMXAssets.map((IMXAsset) => ({
    token_address: IMXAsset.token_address,
    token_id: IMXAsset.token_id,
    chain_id: chain_id,
  }));
};

export const convertEVMAssetsToAsset = (evmAssets: EVMAsset[], chain_id: number): Asset[] => {
    return evmAssets.map((evmAsset) => ({
      token_address: evmAsset.token_address,
      token_id: evmAsset.token_id,
      chain_id: chain_id
    }));
  };

  export const sliceAddress = (addy, n = 6) => addy ? `${addy.slice(0, n)}...${addy.slice(n * -1)}` : ""

