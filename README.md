## Introduction
This is the frontend for the migration tool to go from EVM chains to Immutable X. The backend is located here: https://github.com/danekshea/blockchain-migration-tool-backend.

The frontend application is programmed in Svelte and simply burns a token on the EVM chain and displays the resulting token fetches on both the origin chain and the destination chain. The app uses Moralis as a node.

The following EVM origin chains are supported:
* Arbitrum
* Avalanche C-chain
* BNB
* Cronos
* ETH L1
* Fantom
* Polygon PoS

## Configuration
* Set all the environment variables in blockchain.ts including the ABI

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Working on

## Working on next

## TO-DO
* Strongly type everything
* Add recursion to fetching of balances, right now it's only reading the first page
* Fix import error on Ethereum import
