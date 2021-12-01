import djSet from '../../assets/dj-set2.jpg';

export default function ForumFeature() {
    return (
        <div className="content-block" id="forum-feature">
            <div className="image-content">
                <img src={djSet} alt="guitarist" className="feature-image"></img>
            </div>
            <div className="text-content">
                <h3>Spread your love of music with other like-minded people</h3>
                <h5>Speak to and share song suggestions with other people with similar music tastes to you.</h5>
                <button className="sign-up-prompt"><a href="https://app.shutupanddance.io/signup">START FOR FREE</a></button>
            </div>
        </div>
    );
};