import React from 'react'
import IconText from './IconText'
import Button from 'components/Button'
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade bottom>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <IconText/>
                        <p className="brand-tagline">
                            We Kabooom your beauty <br/> holiday
                            instantly and memorable.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start booking room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payment">
                                    Use payment
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/carrer">
                                    Our Carrers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms-conditions">
                                    Terms & conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@staycation.id">
                                    support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:081268312221">
                                    0821-6831-2221
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Bangkinang, Riau</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2020 - All right reserved - Staycation
                    </div>
                </div>
            </div>
        </footer>
        </Fade>
    )
}
