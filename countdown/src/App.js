import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./main.scss";

const Clock = () => {

    const [now, setNow] = useState(new Date().getTime());
    const [lastDay, setLastDay] = useState(new Date().getTime() + 604800000)
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    if ((lastDay - now) > 0) {
        return (
            <div className="container">
                <h1>La Chocolatiere</h1>
                <h2>Otwarcie sklepu za</h2>
                <div className="timer">
                    <div className="timeBox">
                     {parseInt((lastDay - now) / 86400000) % 7} <p>dni</p>
                    </div>
                    <div className="timeBox">
                        {parseInt((lastDay - now) / 3600000) % 24} <p>godziny</p>
                    </div>
                    <div className="timeBox">
                        {parseInt((lastDay - now) / 60000) % 60} <p>minuty</p>
                    </div>
                    <div className="timeBox">
                        {parseInt((lastDay - now) / 1000) % 60} <p>sekundy</p>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <>
                <h1>Zapraszamy!</h1>
                <button>Wchodzę</button>
            </>
        )
    }
}

const App = () => {
    return <Clock/>
}

ReactDOM.render(<App/>, document.getElementById("app"));

export default <App/>
