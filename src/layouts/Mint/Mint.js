import { useState } from "react";
import { Link } from "react-router-dom";
// import { IKImage } from "imagekitio-react";
// import Countdown from 'react-countdown';
import "./Mint.css";
import starsFast from "../../assets/videos/starsFast.mp4";
import starsSlow from "../../assets/videos/starsSlow.mp4";
// import ship from '../../assets/images/mint/ship.png';

import BackButton from "../../assets/images/mint/Back_Button.png";
import MintButton from "../../assets/images/mint/Mint_btn_desktop.png";
import MintButtonMobile from "../../assets/images/mint/Mint_btn_mobile.png";
import Web3 from "web3";
import { contractABI, contractAddress } from "contractData";
// import { useEffect } from 'react/cjs/react.production.min';

const Mint = () => {
  // const [minting, setMinting] = useState(false);
  const [counter, setCounter] = useState(1);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState({});
  const [mintFee, setMintFee] = useState("");

  const [loading, setLoading] = useState(false);
  const [maxSupply, setMaxSupply] = useState("");
  const [totalMinted, setTotalMinted] = useState("");

  window.ethereum.on("accountsChanged", (accounts) => {
    setAccount(accounts[0]);
  });

  async function handleNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x4" }],
      });
    } catch (e) {
      //console.log(e);
    }
  }
  // function to connect wallet
  async function handleConnect() {
    if (Web3.givenProvider) {
      try {
        let web3 = new Web3(Web3.givenProvider);
        //console.log("web3: ", web3)
        await Web3.givenProvider.enable();

        // get accounts
        let addresses = await web3.eth.getAccounts();
        //console.log(addresses)
        setAccount(addresses[0]);

        // get networkId
        let networkId = await web3.eth.getChainId();
        // console.log(networkId);
        if (networkId !== "4") {
          await handleNetwork();
        }

        // set contract
        let contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log("contract: ", contract);
        setContract(contract);

        // get MINT_FEE
        let MINT_FEE = await contract.methods.presaleCost().call();
        // console.log("MINT_FEE: ", MINT_FEE);
        // console.log(typeof MINT_FEE);
        setMintFee(MINT_FEE);

        let maxSupply = await contract.methods.maxSupply().call();
        setMaxSupply(maxSupply);

        let totalMinted = await contract.methods.totalSupply().call();
        setTotalMinted(totalMinted);
        setInterval(async () => {
          let totalMinted = await contract.methods.totalSupply().call();
          setTotalMinted(totalMinted);
        }, 3000);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      alert(
        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
          Please Install Metamask!
        </a>
      );
    }
  }

  //   Pre sale is currently integrated
  const mintClick = async () => {
    if (contract && account) {
      try {
        setLoading(true);
        let value = String(counter * mintFee);
        await contract.methods
          .presaleMint(counter)
          .send({ from: account, value });
        let successMessage =
          "NFT minted successfully, check it out: https://opensea.io/account";
        console.log(successMessage);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e.message);
      }
    } else {
      alert("Connect Wallet first!");
    }

    // if(minting){
    //     // document.getElementById('mint_glow').classList.add('hidden');
    //     // document.getElementById('mint_right_light').classList.add('hidden');
    //     document.getElementById('video_starsFast').classList.add('hidden');
    //     document.getElementById('video_starsSlow').classList.remove('hidden');
    //     setMinting(false);
    // }
    // else{
    //     document.getElementById('video_starsFast').classList.remove('hidden');
    //     document.getElementById('video_starsSlow').classList.add('hidden');
    //     // document.getElementById('mint_right_light').classList.remove('hidden');
    //     // document.getElementById('mint_glow').classList.remove('hidden');
    //     setMinting(true);
    // }
  };

  const incrementCounter = () => {
    if (counter >= 4) {
      setCounter(5);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  const decrementCounter = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  // Renderer callback with condition
  //   const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //     if (completed) {
  //       // Render a completed state
  //       return <h2>Coming Soon</h2>;
  //     } else {
  //       // Render a countdown
  //       return (
  //         <h2>
  //           {days < 10 ? "0" + days : days}:{hours < 10 ? "0" + hours : hours}:
  //           {minutes < 10 ? "0" + minutes : minutes}:
  //           {seconds < 10 ? "0" + seconds : seconds}
  //         </h2>
  //       );
  //     }
  //   };

  return (
    <>
      {/* <div className='mint_overlay'>
            <Link to = '/'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/>
                </svg>
            </Link>
            <h2> <Countdown date={'2022-05-29T22:00:00'} renderer={renderer} /> </h2>
        </div> */}
      <div className="mint_container">
        <div className="mint_ship_container">
          <div className="mint_video_container">
            <video
              className="mint_video mint_video_starsFast hidden"
              muted
              playsInline={true}
              autoPlay={true}
              loop={true}
              id="video_starsFast"
            >
              <source src={starsFast} type="video/mp4" />
            </video>

            <video
              className="mint_video mint_video_starsSlow"
              muted
              playsInline={true}
              autoPlay={true}
              loop={true}
              id="video_starsSlow"
            >
              <source src={starsSlow} type="video/mp4" />
            </video>
          </div>

          <div className="ship"></div>

          {account && contract ? (
            <>
              <button
                className="mint_button"
                onClick={mintClick}
                disabled={loading}
              >
                <img src={MintButton} alt="mintbutton" />
              </button>

              <button
                className="mint_button_mobile"
                onClick={mintClick}
                disabled={loading}
              >
                <img src={MintButtonMobile} alt="mintbutton" />
              </button>
            </>
          ) : (
            <>
              <button className="mint_button" onClick={handleConnect}>
                <h3 style={{ color: "white" }}>Connect Wallet</h3>
              </button>

              <button className="mint_button_mobile" onClick={handleConnect}>
                <h3 style={{ color: "white" }}>Connect Wallet</h3>
              </button>
            </>
          )}

          <div className="mint_counter">
            <button
              className="mint_counter_button mint_counter_button_add"
              onClick={decrementCounter}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
              </svg>
            </button>
            <p className="mint_counter_text">
              {counter >= 5 ? "Greedy" : counter}
            </p>
            <button
              className="mint_counter_button mint_counter_button_sub"
              onClick={incrementCounter}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </button>
          </div>

          {!!account && !!contract ? (
            <div className="mint_total_items">
              {`${maxSupply - totalMinted} / ${maxSupply}`}
            </div>
          ) : null}

          <center>
            <div className="mint_wallet_address">
              {account
                ? `${account
                    .substring(0, 5)
                    .concat("...", account.substring(38, 42))}`
                : null}
            </div>
          </center>

          <Link to="/" className="mint_back_button">
            <img src={BackButton} alt="mintback" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mint;
