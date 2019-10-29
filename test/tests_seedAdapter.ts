import { SeedAdapter } from '../src/adapters/SeedAdapter';
import { libs } from '@waves/waves-transactions';

describe('WSeed adapter test', () => {
    
    it('Create adapter from simple seed', async () => {
        const seed = '1234567890123456789123456789';
        const adapter = new SeedAdapter(seed, 'T');
        const address = await adapter.getAddress();
        const privateKey = await adapter.getPrivateKey();
        const mySeed = await adapter.getSeed();
        const encodedSeed = await adapter.getEncodedSeed();
        expect(adapter.isEncoded).toBe(false);
        expect(mySeed).toBe(seed);
        expect(address).toBe('3Mt8YNnmFkdrGrHMdt9mtjZgWBAZuF9zj7V');
        expect(privateKey).toBe('3jMMBzk5hDVhBrKVferGnnS49oejmrQHHjTxU3NowZ6x');
        expect(encodedSeed).toBe(libs.crypto.base58Encode(libs.crypto.stringToBytes(seed)));
    });
    
    it('Create adapter from base58 seed', async () => {
        const encoded = libs.crypto.base58Encode(libs.crypto.stringToBytes('1234567890123456789123456789'));
        const seed = `base58:${encoded}`;
        const adapter = new SeedAdapter(seed, 'T');
        const address = await adapter.getAddress();
        const privateKey = await adapter.getPrivateKey();
        const mySeed = await adapter.getSeed();
        const encodedSeed = await adapter.getEncodedSeed();
        expect(adapter.isEncoded).toBe(true);
        expect(mySeed).toBe('1234567890123456789123456789');
        expect(address).toBe('3Mt8YNnmFkdrGrHMdt9mtjZgWBAZuF9zj7V');
        expect(privateKey).toBe('3jMMBzk5hDVhBrKVferGnnS49oejmrQHHjTxU3NowZ6x');
        expect(encodedSeed).toBe(encoded);
    });
    
    it('Create adapter from user seed', async () => {
        const user = {
            encryptedSeed: 'U2FsdGVkX19iOsZUUXdokaat9g3MVg9B4FCW199Zoap7S04dO6XtP5w5fzFHOGvo',
            password: '123123',
            encryptionRounds: 5000,
        };
        const adapter = new SeedAdapter(user, 'T');
        const address = await adapter.getAddress();
        const privateKey = await adapter.getPrivateKey();
        const mySeed = await adapter.getSeed();
        const encodedSeed = await adapter.getEncodedSeed();
        expect(adapter.isEncoded).toBe(false);
        expect(mySeed).toBe('1234567890123456789123456789');
        expect(address).toBe('3Mt8YNnmFkdrGrHMdt9mtjZgWBAZuF9zj7V');
        expect(privateKey).toBe('3jMMBzk5hDVhBrKVferGnnS49oejmrQHHjTxU3NowZ6x');
        expect(encodedSeed).toBe(libs.crypto.base58Encode(libs.crypto.stringToBytes('1234567890123456789123456789')));
    });
    
    it('Create adapter from user encoded seed', async () => {
        const user = {
            encryptedSeed: 'U2FsdGVkX18qITSaCcqnwW3+CW081VQeOFq4abcshIdyR/6e1BJatQclPAoo0IuOsnfE462VYLcnVEBbV18Vdw==',
            password: '12345678',
            encryptionRounds: 5000,
        };
        const adapter = new SeedAdapter(user, 'T');
        const address = await adapter.getAddress();
        const privateKey = await adapter.getPrivateKey();
        const mySeed = await adapter.getSeed();
        const encodedSeed = await adapter.getEncodedSeed();
        expect(adapter.isEncoded).toBe(true);
        expect(mySeed).toBe('1234567890123456789123456789');
        expect(address).toBe('3Mt8YNnmFkdrGrHMdt9mtjZgWBAZuF9zj7V');
        expect(privateKey).toBe('3jMMBzk5hDVhBrKVferGnnS49oejmrQHHjTxU3NowZ6x');
        const eSeed = libs.crypto.base58Encode(libs.crypto.stringToBytes('1234567890123456789123456789'));
        debugger;
        expect(encodedSeed).toBe(eSeed);
    });
    
    it('Create adapter from base58 seed with strange simbols', async () => {
        const encoded = libs.crypto.base58Encode([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,256,0,0]);
        const trueSeed = libs.crypto.bytesToString([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,256,0,0]);
        const seed = `base58:${encoded}`;
        const adapter = new SeedAdapter(seed, 'T');
        const address = await adapter.getAddress();
        const privateKey = await adapter.getPrivateKey();
        const mySeed = await adapter.getSeed();
        const encodedSeed = await adapter.getEncodedSeed();
        expect(adapter.isEncoded).toBe(true);
        expect(mySeed).toBe(trueSeed);
        expect(address).toBe('3MsWgBxzAEef1REibqvD1sFJjYvytSQsW7r');
        expect(privateKey).toBe('9dnimnoqv6yAR6u8q4Z9LpeDmfS5P15qFiqiLzap2x6P');
        expect(encodedSeed).toBe(encoded);
    });
    
    it('Create adapter from non stringable data', async () => {
        
        const encodedSeed = 'base58:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        const adapter = new SeedAdapter(encodedSeed, 'T');
        
        const eSeed = await adapter.getEncodedSeed();
    
        expect(eSeed === encodedSeed.replace('base58:', '')).toBeTruthy();
        expect(() => adapter.getSeed().then(data => data.length > 0)).toBeTruthy()
    });
    
    
    it('Create adapter from non stringable data', async () => {
        
        const encodedSeed = 'base58:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        const adapter = new SeedAdapter(encodedSeed, 'T');
        
        const eSeed = await adapter.getEncodedSeed();
        
        expect(eSeed === encodedSeed.replace('base58:', '')).toBeTruthy();
        expect(() => adapter.getSeed().then(data => data.length > 0)).toBeTruthy()
    })
    
});
