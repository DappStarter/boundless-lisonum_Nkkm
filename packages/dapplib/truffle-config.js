require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile pulse harvest opinion swear turtle'; 
let testAccounts = [
"0xc61c5da1abeaec1f163a64c764c93eb8e2af60bc20f9b8c4aa8eb83aaebb3847",
"0x4805642124d3de1788f6574bc4087fbc1b3f4c58b471d5393aaf9c47b90b0a31",
"0xe2ff7b4436a0a4470330ec9d8ada4a9d2bad4d0a00c70328afca03e99b6cecd2",
"0xdcad61e2a1139004b1dadbe3b847ac2960a23057fee427ef2fec82c95e36d5cf",
"0x2c91b4bdae97069030d7e5aa86401df59d20a56140cce47d585419ce1eddaf49",
"0xd6ff512cf3ad7156c638281cda1cd196e53bd5b2d935da5e1ccf4d963f2a46bf",
"0x53596690eb629c5fb0fdb948879e4af92acd122abb2ff8b2f91860c7ae3a06e7",
"0x710ba10f855b0d7c12ee49d2bccbaa455e4bffe4391e6779ed79b922479c275f",
"0xf57d357a7aef657bf1653769b2b7962c4c3ae7441494313b7ca636ba3e99b1c3",
"0x1ff888bd7ab7c8e6216fbbe04aedc079bb712cb9677a5db850ce900e73c146b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

