import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
import Counter from "./Counter";
import { useState } from "react";
import ContextSample from "./ContextSample";
import Average from "./Average";

function App() {
    const [visibleInfo, setVisibleInfo] = useState(false);
    const [visibleCounter, setVisibleCounter] = useState(false);
    const [visibleContextSample, setVisibleContextSample] = useState(false);
    const [visibleAverage, setVisibleAverage] = useState(false);

    return (
        <div>
            <div>
                <button onClick={() => setVisibleCounter(!visibleCounter)}>
                    {visibleCounter ? "카운터 숨기기" : "카운터 보이기"}
                </button>
                {visibleCounter && <Counter />}
                <hr />
            </div>
            <div>
                <button onClick={() => setVisibleInfo(!visibleInfo)}>
                    {visibleInfo ? "Info 숨기기" : "Info 보이기"}
                </button>
                {visibleInfo && <Info />}
                <hr />
            </div>
            <div>
                <button
                    onClick={() =>
                        setVisibleContextSample(!visibleContextSample)
                    }
                >
                    {visibleContextSample
                        ? "ContextSample 숨기기"
                        : "ContextSample 보이기"}
                </button>
                {visibleContextSample && <ContextSample />}
                <hr />
            </div>
            <div>
                <button onClick={() => setVisibleAverage(!visibleAverage)}>
                    {visibleAverage
                        ? "visibleAverage 숨기기"
                        : "visibleAverage 보이기"}
                </button>
                {visibleAverage && <Average />}
                <hr />
            </div>
        </div>
    );
}

export default App;
