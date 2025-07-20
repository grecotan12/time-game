import { useState } from "react"
import { NavLink } from "react-router-dom";

export const RuleScreen = () => {
    const [gender, setGender] = useState('');

    const handleSelectGender = (e) => {
        setGender(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <h2 className="sub-title">Game Rules</h2>
            <div className="card mt-3">
                <div className="card-body">
                    <ul className="rule">
                        <li className="mt-2">Choose your gender for type of rewards then click "Play"</li>
                        <li className="mt-2">Look at Analog Clock</li>
                        <li className="mt-2">Enter the digital time</li>
                        <li className="mt-2">Click submit to check the answer</li>
                        <li className="mt-2">The minutes values are ony 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55</li>
                        <li className="mt-2">The hours values are only 1,2,3,4,5,6,7,8,9,10,11,12</li>
                        <li className="mt-2">If you get the correct answer, you will get a point, get up to 5,10,15 for your desired reward</li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex flex-column justify-content-center mt-3">
                <label htmlForfor="gender">Your gender for rewards:
                    <select value={gender} onChange={handleSelectGender} className="m-3">
                        <option defaultValue=''>---</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </div>
            <NavLink className="btn btn-primary play-btn mt-3 mb-3" to={{
                pathname: '/game',
                state: {gender: gender}
            }}>Play</NavLink>
        </div>
    )
}