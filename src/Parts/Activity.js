import React from 'react'
import Button from 'components/Button'
import Fade from 'react-reveal/Fade';

export default function Activity(props) {
    return (
        <section className="container">
            <h4 className="mb-3">Tresure to Choose</h4>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return <div key={`activity-${index}`} className={`item column-4 row-1`}>
                            <Fade bottom delay={ 500 * index }>
                            <div className="card card-featured">
                                <figure className="img-wrapper">
                                    <img 
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button type="link" className="streched-link d-block text-white" href={`/properties/${item._id}`}>
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
