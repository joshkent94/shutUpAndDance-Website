import Navigation from "../Navigation/Navigation";
import './Heading.css';

export default function Heading() {
    return (
        <div id="greeting">
            <Navigation />
            <div id="heading">
                <h1>Shut Up And Dance</h1>
                <h4>For the love of music</h4>
            </div>
            <a href="#main-info" id="to-content"><i className="bi bi-caret-down-fill"></i></a>
        </div>
    );
};