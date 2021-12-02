import guitarist from '../../assets/guitarist.jpg';

export default function SongSuggestionsFeature() {
    return (
        <div className="content-block" id="suggestion-feature">
            <div className="image-content">
                <img src={guitarist} alt="guitarist" className="feature-image"></img>
            </div>
            <div className="text-content">
                <h3>Song suggestions based on the music you love</h3>
                <h5>Our recommendations engine will introduce you to new music that you enjoy.</h5>
                <button className="learn-more-button"><a href="/" className="learn-more-link">Learn more<i className="bi bi-caret-right-fill"></i></a></button>
            </div>
        </div>
    );
};