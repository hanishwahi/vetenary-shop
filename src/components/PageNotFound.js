import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='container'>
            <section className="page_404">

                    <div className="row">
                         
                            <div className="col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>
                                    <Link to='/login' className="link_404">Go to Home</Link>

                                 </div>
                            </div>
                     
                    </div>
               
            </section>
        </div>
    )
}

export default PageNotFound