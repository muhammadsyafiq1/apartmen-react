import React from 'react'

import ImageHero from 'Assets/images/img-hero.jpg'
import ImageHero_ from 'Assets/images/img-hero-frame.jpg'
import IconCities from 'Assets/images/icon/icon-cities.svg'
import IconTraveler from 'Assets/images/icon/icon-traveler.svg'
import IconTreasure from 'Assets/images/icon/icon-treasure.svg'
import Button from 'components/Button'
import formatNumber from 'utils/formatNumber'
import Fade from 'react-reveal/Fade';

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "auto"
        })
    }

    return (
        <Fade bottom>
        <section className="container p-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className=" font-weight-bold line-height-1 mb-3">
                        Forgot Busy Work, <br />
                        Start Next Vocation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight:"170%" }}>
                        We provide what you need to enjoy your holiday with familiy. time to
                        make another memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    
                    <div className="row" style={{ marginTop: 80 }}>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img
                                width="36"
                                height="36"
                                src={IconTraveler}
                                alt={`${props.data.travelers} Traveler`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img
                                width="36"
                                height="36"
                                src={IconTreasure}
                                alt={`${props.data.treasures} Traveler`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)} {""}
                                <span className="text-gray-500 font-weight-light">
                                    Treasures
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img
                                width="36"
                                height="36"
                                src={IconCities}
                                alt={`${props.data.cities} Traveler`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)} {""}
                                <span className="text-gray-500 font-weight-light">
                                    Cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pt-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={ImageHero}
                                alt="room with chouses"
                                className="img-fluid position-absolute"
                                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                            />
                            <img
                                src={ImageHero_}
                                alt="room with chouses frame"
                                className="img-fluid position-absolute"
                                style={{ margin: "0 -15px -15px 0" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
        )
    }
