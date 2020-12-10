import React from 'react'
import { Component } from 'react';
import {InputDate , InputNumber} from 'components/Form';
import Breadcrumb from 'components/Breadcrumb';

export default class Example extends Component {
   

    render(){
        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];
        
        return(
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb}/>
                    </div>
                </div>
            </div>
        );
    }
}
