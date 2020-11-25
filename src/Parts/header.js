import React from 'react'
import BrandIcon from './iconText'
import Button from 'components/Button'

export default function header() {

    const getNavLinkClass = path => {
        return props.location,pathName === path ? "active" : "";
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                </nav>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav nl-auto">
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Browse by
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Stories
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Agents
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
