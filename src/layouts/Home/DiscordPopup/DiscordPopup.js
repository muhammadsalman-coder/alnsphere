
import './DiscordPopup.css';

const DiscordPopup = ({setShowPopup}) => {

    return(
        <div class="modal open">
            <div class="modal-overlay" onClick = {() => setShowPopup(false)}></div>
            <div class="modal-card">
                <div class="modal-body">
                <div class="modal-header">Join Discord</div>
                <div class="modal-content">Discord is closed at this moment, we are publishing our Discord link on Twitter - turn on the 🔔</div>
                <div class="modal-footer" >
                    <button className='model_okBtn' onClick = {() => setShowPopup(false)}>Okay</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default DiscordPopup;