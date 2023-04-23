import { writable } from 'svelte/store';
import { RegistrationStatus } from 'src/types';

export const completedSteps = writable(0);
export const registrationStatus = writable(RegistrationStatus.Unchecked);
export const walletAddress = writable("");
export const chainId = writable(0);
