import rockConcertCrowd from '../../assets/rock-concert-crowd.jpeg';

export default function GigsFeature() {
    return (
        <div className="content-block" id="gigs-feature">
            <div className="text-content">
                <h3>Be the first to know about gigs in your area</h3>
                <h5>Our active community will mean you're kept up-to-date with the latest gig ticket releases in your area.</h5>
                <button className="learn-more-button"><a href="/" className="learn-more-link">Learn more<i className="bi bi-caret-right-fill"></i></a></button>
            </div>
            <div className="image-content">
                <img src={rockConcertCrowd} alt="guitarist" className="feature-image"></img>
            </div>
        </div>
    );
};