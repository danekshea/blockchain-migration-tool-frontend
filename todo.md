# List of things to do

## Currently working on
- [ ] Ideal user flows

## Working on next
- [ ] Loading screen for after "Migrate" button is pressed
- [ ] Show NFT image and token_id for each token on different chain
- [ ] Footer that links to opensource code, and has other links
- [ ] Instructions that explain how to use

## Nice to haves
- [ ] Modal pop-up to select which chain
- [ ] Separate screen / log-in flow for the end user to burn their token (and then register on IMX)

## Completed
- [ ] N/A

### Instructions so far
Intended user: Game collection owner who has deployed a collection on a separate chain but want to migrate their NFTs to Immutable X AND game player that wants to burn their tokens

Intended user's flow: 
1. Game collection owner will ask their users to burn assets that exist on a suitable chain
2. Their users will burn their assets on that chain (using same site?)
3. Game collection owner will create the new Immutable X ERC721 contract and deploy on Immutable X (and record its collection address)
4. Game collection owner will connect to migration website with the wallet that owns (?) the newly deployed Immutable X contract, enters the collection address of that contract and will then see their collection's details, where the LHS lists all the burns
5. Game collection owner will click 'migrate' for each of the tokens (individually or automated) [QUESTION: when is burn watcher used during this?]
6. Loading bar will appear with number of tokens minted with their Immutascan txns. [NOTE: should tokens be minted to owner's wallet or directly to user?]
7. Tokens will be minted on Immutable X (possibly directly to the user that burnt the tokens)

#### Assumptions
- Currently, should just be from any chain to Immutable X.
- In the future, should be from any chain to Immutable zkEVM. Should/could also allow X <-> zkEVM migrations(?)
- Currently, will only be tailored towards ERC721

#### Open questions
- For Immutable zkEVM migrations, would the collection owner front the cost of the mint? What's it like on other chains when migrations occur?



