import djSet from '../../assets/dj-set.jpeg';

export default function MainInfo() {
    return (
        <div className="content-block" id="main-info">
            <div className="text-content">
                <h3>Designed for music lovers, by music lovers</h3>
                <h5>The online platform to spread your passion for music.</h5>
                <button className="sign-up-prompt"><a href="https://app.shutupanddance.io/signup">START FOR FREE</a></button>
            </div>
            <div className="image-content">
                <img src={djSet} alt="guitarist" className="feature-image"></img>
            </div>
        </div>
    );
};