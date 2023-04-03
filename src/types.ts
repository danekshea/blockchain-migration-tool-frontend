export interface IMXAsset {
    token_address: string;
    token_id: number;
    id: string;
    user: string;
    status: string;
    uri: string | null;
    name: string | null;
    description: string | null;
    image_url: string | null;
    metadata: string | null;
    collection: {
      name: string;
      icon_url: string;
    } | null;
    created_at: Date;
    updated_at: Date;
  }

  export interface EVMAsset {
    token_address: string;
    token_id: number;
    owner_of: string;
    block_number: number;
    block_number_minted: number;
    token_hash: string;
    amount: number;
    contract_type: string;
    name: string;
    symbol: string;
    token_uri: string | null;
    metadata: string | null;
    last_token_uri_sync: Date
    last_metadata_sync: Date | null;
    minter_address: string;
    possible_spam: boolean;
  }

export interface Asset {
  token_address: string;
  token_id: number;
  chain_id: number;
}

export interface chainDetails {
  name: string,
  shortName: string,
  img: string
}
  