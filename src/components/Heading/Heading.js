import Navigation from "../Navigation/Navigation";
import './Heading.css';

export default function Heading() {
    return (
        <div id="greeting">
            <Navigation />
            <div id="overlay"></div>
            <div id="heading">
                <h1>Shut Up And Dance</h1>
                <h3>For the love of music</h3>
            </div>
        </div>
    );
};