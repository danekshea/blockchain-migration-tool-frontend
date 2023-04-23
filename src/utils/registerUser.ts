// import { walletConnection, Client } from "./walletConnection";

// export async function registerUser() {
//     try {
//         const address = await walletConnection.ethSigner.getAddress();
//         const isRegistered = await CheckUserRegistration(address);
//         if (!isRegistered) {
//             await Client.registerOffchain(walletConnection)
//     }
//     } catch (e) {
//         throw new Error(JSON.stringify(e, null, 4));
//     }
// }

// // Checks that the user is regsitered
// export async function CheckUserRegistration(address: string) {
//     try {
//         const user = await Client.getUser(address);
//         if (user.accounts.length === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     } catch (e) {
//         return false;
//     }
// }