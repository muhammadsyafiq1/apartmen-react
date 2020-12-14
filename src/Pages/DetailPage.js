import React, { Component } from 'react';
import PageDetailTitle from 'Parts/PageDetailTitle';
import ItemDetails from 'schema_db/itemDetails.json';
import Header from 'Parts/Header';
import FeaturedImage from 'Parts/FeaturedImage';
import PageDetailDescription from 'Parts/PageDetailDescription';
import BookingForm from 'Parts/BookingForm';
import Categories from 'Parts/Categories';
import Testimony from 'Parts/Testimony';
import Footer from 'Parts/Footer';
import Activity from 'Parts/Activity';

export default class DetailPage extends Component {
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render(){
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];

        return(
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle 
                    breadcrumb={breadcrumb} 
                    data={ItemDetails}
                ></PageDetailTitle>
                <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails}></BookingForm>
                        </div>
                    </div>
                </section>
                <Categories data={ItemDetails.categories}></Categories>
                {/* <Activity data={ItemDetails.activities}></Activity> */}
                <Testimony data={ItemDetails.testimonial}></Testimony>
                <Footer></Footer>
            </>
        )
    }
}

