
import './RandomPage.css';

const RandomPage = () => {
    return(
        <div className="container">
            <h2>Scan this QR Code</h2>
            <div className="qr-image-container">
                <img src = 'https://ik.imagekit.io/6pl7k4a01ha/AlnSphere_qrcode.png?updatedAt=1640315943842' alt = 'qrcode'></img>
            </div>
        </div>
    );
}

export default RandomPage;