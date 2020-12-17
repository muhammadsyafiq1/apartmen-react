import React from 'react'
import Fade from 'react-reveal/Fade'
import Completed_illustration from 'Assets/images/completed.jpg'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img 
                            className="img-fluid" 
                            alt="completed checkout apartment" 
                            src={Completed_illustration} 
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been completed.
                        </p>
                    </div>
                </div>
            </div> 
        </Fade>
    )
}
