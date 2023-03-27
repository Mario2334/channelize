
export const network_chain = {
    test_goerli: {
        network: "goerli",
        thirdPartyWalletOptions: {
            coinbaseWallet: {
                sdk: {
                    appName: 'Channelize',
                },
                provider: {
                    jsonRpcUrl: 'https://rpc.ankr.com/eth_goerli',
                    chainId: 5,
                },
            },
            walletConnect: {
                rpc: {
                    5: 'https://rpc.ankr.com/eth_goerli',
                },
            },
        }
    },
    test_mumbai_polygon :  {
        network: "Mumbai Testnet",
        thirdPartyWalletOptions: {
            coinbaseWallet: {
                sdk: {
                    appName: 'Channelize',
                },
                provider: {
                    jsonRpcUrl: 'https://rpc-mumbai.maticvigil.com',
                    chainId: 80001,
                },
            },
            walletConnect: {
                rpc: {
                    80001: 'https://rpc-mumbai.maticvigil.com',
                },
            },
        }
    }
}
