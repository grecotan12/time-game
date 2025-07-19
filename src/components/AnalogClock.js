export const AnalogClock = ({hour, min}) => {
    const minuteDeg = ((min / 60) * 360) + 90;
    const hourDeg = ((hour / 12) * 360) + 90;

    return(
        <div className="container d-flex justify-content-center mt-5">
            <div className="clock">
                <div className="clock-face">
                    <div className="number number1">1</div>
                    <div className="number number2">2</div>
                    <div className="number number3">3</div>
                    <div className="number number4">4</div>
                    <div className="number number5">5</div>
                    <div className="number number6">6</div>
                    <div className="number number7">7</div>
                    <div className="number number8">8</div>
                    <div className="number number9">9</div>
                    <div className="number number10">10</div>
                    <div className="number number11">11</div>
                    <div className="number number12">12</div>
                    <div className="hand hour-hand" id="hour-hand" style={{transform: `rotate(${hourDeg}deg)`}}></div>
                    <div className="hand minute-hand" id="minute-hand" style={{transform: `rotate(${minuteDeg}deg)`}}></div>
                </div>
            </div>
        </div>
    )
}