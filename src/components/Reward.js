import male_toy_1 from '../images/male_toy_1.png';
import male_toy_2 from '../images/male_toy_2.png';
import male_toy_3 from '../images/male_toy_3.png';
import stuff_1 from '../images/stuff_1.png';
import stuff_2 from '../images/stuff_2.png';
import stuff_3 from '../images/stuff_3.png';
import { useState, useEffect } from 'react';

export const Reward = ({ gender, score }) => {
    const [showReward, setShowReward] = useState(false);

    const handleClose = () => {
        setShowReward(false);
    }

    useEffect(() => {
        if (score === 5 || score === 10 || score === 15) {
            setShowReward(true);
        }
    }, [score])

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="accordion" id="reward">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapseReward" 
                            aria-expanded="true" aria-controls="collapseReward">
                                Reward
                            </button>
                        </h2>
                        <div id="collapseReward" className="accordion-collapse collapse show" data-bs-parent="#reward">
                            <div className="accordion-body">
                                {gender === 'male' ?
                                <div className="container d-flex flex-sm-row flex-column justify-content-center justify-content-md-around align-items-center">
                                    <figure>
                                        <img src={male_toy_1} alt="toy_1" id="male_toy_1"/>
                                        <figcaption>{score >= 5 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>5 points</>}</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={male_toy_2} alt="toy_2" id="male_toy_2"/>
                                        <figcaption>{score >= 10 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>10 points</>}</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={male_toy_3} alt="toy_3" id="male_toy_3"/>
                                        <figcaption>{score >= 15 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>15 points</>}</figcaption>
                                    </figure>
                                </div> :
                                <div className="container d-flex flex-sm-row flex-column justify-content-center justify-content-md-around align-items-center">
                                    <figure>
                                        <img src={stuff_1} alt="stuff_1" id="stuff_1"/>
                                        <figcaption>{score >= 5 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>5 points</>}</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={stuff_2} alt="stuff_2" id="stuff_2"/>
                                        <figcaption>{score >= 10 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>10 points</>}</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={stuff_3} alt="stuff_3" id="stuff_3"/>
                                        <figcaption>{score >= 15 ? <span style={{color: 'green'}}><strong>Claimed</strong></span>: <>15 points</>}</figcaption>
                                    </figure>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {showReward ?
                    <div className='container d-flex flex-column justify-content-center align-items-center reward-claim'>
                        {gender === 'male'  && score === 5? 
                            <img src={male_toy_1} alt="toy_1" id="male_toy_1"/>
                            :
                            <></>
                        }
                        {gender === 'male'  && score === 10? 
                            <img src={male_toy_2} alt="toy_2" id="male_toy_2"/>
                            :
                            <></>
                        }
                        {gender === 'male'  && score === 15? 
                            <img src={male_toy_3} alt="toy_3" id="male_toy_3"/>
                            :
                            <></>
                        }
                        {gender === 'female'  && score === 5? 
                            <img src={stuff_1} alt="stuff_1" id="stuff_1"/>
                            :
                            <></>
                        }
                        {gender === 'female'  && score === 10? 
                            <img src={stuff_2} alt="stuff_2" id="stuff_2"/>
                            :
                            <></>
                        }
                        {gender === 'female'  && score === 15? 
                            <img src={stuff_3} alt="stuff_3" id="stuff_3"/>
                            :
                            <></>
                        }
                        <button className='btn btn-outline-success mt-5' onClick={handleClose}>Confirm</button>
                    </div> :
                    <></>
                }
            </div>
    );
}