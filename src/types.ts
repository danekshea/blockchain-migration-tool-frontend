export interface IMXAssetResponse {
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
  