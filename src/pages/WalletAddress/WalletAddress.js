
import React, { useState, Suspense} from "react";
import './WalletAddress.css';

const Navbar = React.lazy(() => import("layouts/Home/Navbar/Navbar"));


const WalletAddress = () => {

    const [walletAddress, setWalletAddress] = useState('');
    const [status, setStatus] = useState('');

    const postOnGoogleSheet = (e) => {
        e.preventDefault();
        if(walletAddress !== ''){
            document.getElementById('postOnGoogleSheetbtn').style.pointerEvents = 'none';
            const url = 
            'https://script.google.com/macros/s/AKfycbx_jr6--eATTG8B6FismRuU4pFOdV4cOUzgaRxYoF-g009yEiiocV5SUP5JtGiJa69r/exec';
            
            fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode : 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                body: JSON.stringify({walletAddress: walletAddress}) // body data type must match "Content-Type" header
            })
            .then(response => {
                    setWalletAddress('');
                    setStatus('Successfully Submitted');
                    document.getElementById('postOnGoogleSheetbtn').style.pointerEvents = 'all';
            })
            .catch(err => {
                console.log(err);
                document.getElementById('postOnGoogleSheetbtn').style.pointerEvents = 'all';
            });
        }

    }




    return(
        <>
        <Suspense fallback={<div />}>
        <Navbar />{" "}
      </Suspense>
        <div className = 'wallet-container'>
            <div className = 'wallet-content'>
                <form className = 'footer-mail-form' id = 'google-sheet-form'>
                    <div className="form-inputs">
                        <input placeholder = 'your Wallet Address' name = 'WalletAddress' value = {walletAddress}  
                                    onChange = {(event) => setWalletAddress(event.target.value)}></input>
                        <button id = 'postOnGoogleSheetbtn' onClick = {postOnGoogleSheet}>Submit</button>
                    </div>
                    <p>{status}</p>
                </form>        
            
            </div>
      
        </div>
        </>
    )
}

export default WalletAddress;