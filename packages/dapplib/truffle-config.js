require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rule stick mistake good kangaroo army gauge'; 
let testAccounts = [
"0x19d88e3d4fcb51bdd5e261fd657d93e150b0958b4b74583c204a65ef4e65aa6d",
"0x9e6508028a58861d883a012283f4f7e421409d111878dff9e13f64c7e3370f9c",
"0xcfac9a2cb2a891f96a4b98219d5892d8cc3040939f23c4412e9ecba3ff0135b3",
"0x40c60c939d9592068d030f6b36919c765330c696a91c65f1f299f08fe1cc8968",
"0x0bf095056ed9bfd7e2bbe6b44c250cea22ecadfd548de87e083482f517e9ec81",
"0xc03455b0089764039913b0a16d9bdaf3252f8168609fbb0ddfb9ab1e792a1193",
"0xbd905bc093e8b3724977d6dc69ef2dc9800adfa2cd12c860c9998f0fdc8d8186",
"0xed468bd1fd02ceffcc5b39b33ddb627ecfe91fc303d92a80ed0c72aeb3e9bb04",
"0x105b4ad27642ebc6fd227a0ea7b56d36d18658cbf82555aebed946744a7b5f40",
"0x9540ef4d5c34d340bf114e8c113e9a1ae7889fa5df026089e6dff91c0453e8c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

