import React from 'react'
import ServiceList from './ServiceList'
import ServiceForm from './ServiceForm'

function Service() {
    return (
        <>
            <div className='service-main'>
                <div className='container'>
                    <div className='service-text'>
                        <h1>Our Services</h1>
                    </div>
                    <ServiceList/>
                   <ServiceForm/>
                </div>

            </div>

        </>
    )
}

export default Service