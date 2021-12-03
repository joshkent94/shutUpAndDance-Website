import { useState, useRef, useEffect } from 'react';
import djSet from '../../assets/dj-set.jpeg';
import './MainInfo.css';

export default function MainInfo() {
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
        <div ref={domRef} className={isVisible ? "content-block animate__animated animate__slow animate__fadeIn" : "content-block animate__animated animate__slow"} id="about">
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