import React, { Component } from 'react';
import Header from 'Parts/Header';
import Hero from 'Parts/Hero';
import landingPage from 'schema_db/landingPage.json';
import MostPicked from 'Parts/MostPicked';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return(
            <>
                <Header {...this.props}></Header>
                <Hero 
                    refMostPicked={this.refMostPicked} 
                    data={landingPage.hero} 
                />
                <MostPicked 
                    refMostPicked={this.refMostPicked}
                    data={landingPage.mostPicked} 
                />
            </>
        )
    }
}
    


