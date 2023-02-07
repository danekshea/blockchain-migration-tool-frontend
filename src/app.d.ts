import { ExternalProvider } from "@ethersproject/providers";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
	}
	interface Window {
		ethereum?: ExternalProvider;
	  }
}

export {};
