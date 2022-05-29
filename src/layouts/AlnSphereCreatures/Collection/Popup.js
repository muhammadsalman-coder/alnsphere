
import './Popup.css';

const Popup = ({setShowPopup}) => {
    return(
        <div class="modal open">
            <div class="modal-overlay" onClick = {() => setShowPopup(false)}></div>
            <div class="modal-card">
                <div class="modal-body">
                <div class="modal-header">MarketPlace</div>
                <div class="modal-content">This is just a preview and not the live version</div>
                <div class="modal-footer" >
                    <button className='model_okBtn' onClick = {() => setShowPopup(false)}>Okay</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;