
import { useState } from 'react';

import React from 'react';
import './RiddlePage.css';

const TriShapeButton = React.lazy(() =>
  import("components/Buttons/TriShapeButton/TriShapeButton")
);

const RiddlePage = () => {

    const [riddleInput, setRiddleInput] = useState('');
    // const [correctAnswer, setCorrectAnswer] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const checkRiddleInput = () => {
        if(riddleInput.toLowerCase() === 'coin'){
            setStatusMessage('');
            window.location = "https://docs.google.com/forms/d/e/1FAIpQLSeGLbPNGnpXLmeQlyOg1eJ6_szHnwyx2M6diJPWnjJlWN58NQ/viewform?usp=sf_link";
        }
        else{
            setStatusMessage('Wrong Answer');
        }
    }

    return(
        <div className = 'riddle-container'>
            <div className='riddle-form'>
                <p>no body has a head and a tail.</p>
                <p>What is it, then?</p>
                <input className='riddle-input' placeholder='your answer' onChange={(event) => setRiddleInput(event.target.value)}></input>
                <button className = 'riddle-submit-btn' onClick={checkRiddleInput}>
                    <TriShapeButton
                        title="Submit Answer"
                    />
                </button>
                <p className='statusMsg'>{statusMessage}</p>
            </div>
        </div>
    );

}

export default RiddlePage;

// Write a code printling hello world
