export type PrivateKey = string;
export type Address = string;

export interface KeyPair {
	privateKey: PrivateKey;
	address: Address;
}
