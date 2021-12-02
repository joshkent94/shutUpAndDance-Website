import djSet from '../../assets/dj-set.jpeg';
import './MainInfo.css';

export default function MainInfo() {
    return (
        <div className="content-block" id="about">
            <div className="text-content">
                <h3>Designed for music lovers, by music lovers</h3>
                <h5>The number one online platform to spread your passion for music.</h5>
                <button className="coolBeans"><a href="https://app.shutupanddance.io/signup">START FOR FREE</a></button>
            </div>
            <div className="image-content">
                <img src={djSet} alt="guitarist" className="feature-image"></img>
            </div>
        </div>
    );
};