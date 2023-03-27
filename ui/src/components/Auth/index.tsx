import {useDispatch, useSelector} from 'react-redux';
import Web3 from 'web3';
import {Button} from "@mantine/core";
import {selectNetworkState} from "channelize/slices/network";
import {setIsLoadingState} from "channelize/slices/loader";
import {
    selectAuthState,
    selectAuthUser,
    selectUserBalance,
    setAuthState,
    setAuthUser,
    setBalance
} from "channelize/slices/auth";
import {useEffect} from "react";
import {Web3Auth} from "@web3auth/modal";
import {ADAPTER_EVENTS, CONNECTED_EVENT_DATA} from "@web3auth/base";

export function AuthComponent() {
    const dispatch = useDispatch();
    const authUserBalanceState = useSelector(selectUserBalance);
    const authUserState = useSelector(selectAuthUser);
    const isLoggedState = useSelector(selectAuthState);
    const networkState = useSelector(selectNetworkState); // updated
    // let api_key = 'pk_live_EBA067507C5E58F7';
    // let api_secret = 'sk_live_18CC4C335B84B35E';
    let api_key = 'BPLYqeMwTF1nbqGLZM8m12a5i0ohvPgMOws87K8QsF7TnLHy0cbiauLAdE5CxWQfrtHCGnu3ZFijDO00-AuMLxo';
    let api_secret = '2b53ea79546400215b042623d8a170dcf2201d646febd7a17e372c6152d22b7c';
    useEffect(() => {
        // dispatch(setIsLoadingState(true));
        // checkIsUserLoggedIn();
        checkIsUserLoggedIn()
    }, [])

    const subscribeAuthEvents = (web3auth: Web3Auth) => {
        web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
            console.log("connected to wallet", data);
            // web3auth.provider will be available here after user is connected
        });
        web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
            console.log("connecting");
        });
        web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
            console.log("disconnected");
        });
        web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
            console.log("error", error);
        });
        web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
            console.log("error", error);
        });
    };

    const checkIsUserLoggedIn = async () => {
        // let magic = new Magic(api_key);
        // await magic.user.logout();
        // const isLoggedIn = await magic.user.isLoggedIn();
        // console.log(isLoggedIn);
        // if (isLoggedIn) {
        //     const userMetadata: MagicUserMetadata = await magic.user.getMetadata();
        //     //
        //     const publicAddress = userMetadata.publicAddress;
        //     dispatch(setAuthState(true));
        //     dispatch(setAuthUser(publicAddress));
        // }
        // dispatch(setIsLoadingState(false));
    }

    const buttonClick = async () => {
        dispatch(setIsLoadingState(true));
        console.log(networkState);
        // let magic = new Magic(api_key, network_chain[networkState.network]);
        try {
            // const provider = await magic.wallet.getProvider();
            // const web3 = new Web3(provider);
            // // const accounts = await magic.wallet.connectWithUI();
            // console.log(accounts);
            const web3auth = new Web3Auth({
                clientId: api_key, // Get your Client ID from Web3Auth Dashboard
                web3AuthNetwork: "cyan",
                chainConfig: {
                    chainNamespace: "eip155",
                    chainId: "0x13881", // hex of 80001, polygon testnet
                    rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
                    // Avoid using public rpcTarget in production.
                    // Use services like Infura, Quicknode etc
                    displayName: "Polygon Mumbai Testnet",
                    blockExplorer: "https://mumbai.polygonscan.com/",
                    ticker: "MATIC",
                    tickerName: "Matic",
                },
            });
            subscribeAuthEvents(web3auth);
            await web3auth.initModal();
            await web3auth.connect();
            let loggedInfo = await web3auth.authenticateUser();
            console.log(loggedInfo)
            const web3 = new Web3(web3auth.provider);
            const address = (await web3.eth.getAccounts())[0];

            // Get user's balance in ether
            const balance = web3.utils.fromWei(
                await web3.eth.getBalance(address) // Balance is in wei
            );
            console.log(balance);
            console.log(address);
            dispatch(setAuthUser(address));
            dispatch(setIsLoadingState(false));
            dispatch(setBalance(Math.round(balance)));
            dispatch(setAuthState(true));
        } catch (e) {
            alert(e)
        }
    }

    return (
            isLoggedState == true ?
                <Button radius="xl" h={30}>
                    {authUserBalanceState}
                </Button>
                : <Button radius="xl" h={30} onClick={buttonClick}>
                    Sign In
                </Button>
    )
}
