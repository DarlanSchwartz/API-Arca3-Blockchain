import { ethers } from 'ethers';
import { PrivateKey, Address, KeyPair } from './types';

// Generate a new random private key
export const generatePrivateKey = (): PrivateKey => {
	const randomBytes = ethers.utils.randomBytes(32);
	const privateKey = ethers.utils.hexlify(randomBytes);
	return privateKey;
};

// Derive the Ethereum address from a private key
export const getAddress = (privateKey: PrivateKey): Address => {
	const wallet = new ethers.Wallet(privateKey);
	const address = wallet.address;
	return address;
};

export const getKeyPairs = async (): Promise<KeyPair> => {
	const privateKey = generatePrivateKey();
	const address = getAddress(privateKey);

	return { privateKey, address };
};