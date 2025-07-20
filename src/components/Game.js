import { useLocation } from "react-router-dom"
import { Reward } from "./Reward";
import { AnalogClock } from "./AnalogClock";
import { useRef, useState } from "react";

export const Game = () => {
    const location = useLocation();
    const { gender } = location.state;
    const [score, setScore] = useState(0);
    const hourRef = useRef(null);
    const minRef = useRef(null);
    const minArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    const getRandomMin = () => {
        return Math.floor(Math.random() * 11) + 0;
    }

    const getRandomHour = () => {
        return Math.floor(Math.random() * 12) + 1;
    }

    const [hour, setHour] = useState(getRandomHour());
    const [min, setMin] = useState(minArray[getRandomMin()]);

    const handleInputs = () => {
        const hourInput = Number(hourRef.current.value);
        const minInput = Number(minRef.current.value);
        if (hourInput === hour && minInput === min) {
            setScore(score + 1);
        }
        setHour(getRandomHour());
        setMin(minArray[getRandomMin()]);
    }

    return (
        <div>
            <Reward gender={gender} score={score}/>
            <h2 className="sub-title mt-5 text-center">Points: {score}</h2>
            <p className="text-center">The bold hand is hour, the thin hand is minute</p>
            <AnalogClock hour={hour} min={min}/>
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <label htmlFor="hour">Hour: <input type="number" id="hour" className="user-input" min="1" max="12" ref={hourRef}/></label>
                <label htmlFor="min">Minute: <input type="number" id="min" className="user-input" min="1" max="60" ref={minRef}/></label>
                <button className="btn btn-primary submit-btn" onClick={handleInputs}>Submit</button>
            </div>
        </div>
    )
}