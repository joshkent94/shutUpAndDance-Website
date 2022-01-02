import rockConcertCrowd from '../../assets/rock-concert-crowd.jpeg';
import { useState, useRef, useEffect } from 'react';

export default function DashboardFeature() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            };
        });
    
        observer.observe(domRef.current);
        const node = domRef.current
    
        return () => observer.unobserve(node);
    }, []);

    return (
        <div ref={domRef} className={isVisible ? "content-block animate__animated animate__slow animate__fadeIn" : "content-block animate__animated animate__slow"} id="dashboard-feature">
            <div className="image-content">
                <img src={rockConcertCrowd} alt="guitarist" className="feature-image"></img>
            </div>
            <div className="text-content">
                <h3>Everything about your music taste all in one place</h3>
                <h5>Our dashboard capabilities mean everything that's important to you about music is easy to access from one place.</h5>
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