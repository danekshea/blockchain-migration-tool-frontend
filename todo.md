# List of things to do

## Currently working on
- [ ] Instructions that explain how to use
- [ ] Check user is registered on IMX else, register them (note: is this backend or frontend?)

## Working on next
- [ ] Loading screen for after "Migrate" button is pressed
- [ ] Show NFT image and token_id for each token on different chain
- [ ] Footer that links to opensource code, and has other links
- [ ] .env file (or other) for game collection owners to modify before deployment

## Nice to haves
- [ ] N/A

## Completed
- [ ] N/A

### Instructions for use
Intended users: 
- Game collection owner
- Players that hold game's NFTs in their wallets.

### Before using these tools, please ensure these prerequisites have been met:
- Game collection owner has previously deployed a collection on a supported chain (e.g. Polygon, BSC, Arbitrum etc.) with already minted assets and wishes to migrate those assets to IMX
- Game collection owner has newly deployed an IMX compatible contract onto Immutable protocol mainnet which will be used to re-mint assets
- Players have access to their NFTs in non-custodial wallets and are willing to burn them to receive newly-minted IMX NFTs

### Below are considerations that are out of scope for current release:
- Players will mint their NFT to the same wallet address that burnt that asset
- NFTs that are burnt will have the same token_id as those that are minted on IMX
- Only ERC721s will be considered for this release (no ERC20s nor ERC1155s)
- Only migrations to Immutable X (StarkEx) are in scope for this release
- tokenid, different wallet address, different metadata

### Intended user flow
1. Game collection owner will be provided both the frontend and the backend of this migration tool so that they can deploy as-is (after changing .env), or create something similar using this as foundation
2. Game collection owner will deploy migration tool and notify players to use the tool
3. Players will enter website and connect their wallet
4. Players will see their assets on previous chain and then migrate assets to Immutable
5. Players will successfully see their new assets on Immutable with links to their Immutascan transactions