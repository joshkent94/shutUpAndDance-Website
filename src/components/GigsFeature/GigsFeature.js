import rockConcertCrowd from '../../assets/rock-concert-crowd.jpeg';

export default function GigsFeature() {
    return (
        <div className="content-block" id="gigs-feature">
            <div className="text-content">
                <h3>Be the first to know about gigs in your area</h3>
                <h5>Our active community will mean you're kept up-to-date with the latest gig ticket releases in your area.</h5>
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
            <div className="image-content">
                <img src={rockConcertCrowd} alt="guitarist" className="feature-image"></img>
            </div>
        </div>
    );
};