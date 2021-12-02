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
                <div className="learn-more">
                    <a href="/" className="cta">
                        <span>Learn more</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};