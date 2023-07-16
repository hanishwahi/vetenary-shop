import React from 'react'

function ServiceForm() {
    return (
        <>
            {/* <div className='form-main'>
                <form>
                    <div>
                        <label>Name: </label><br />
                        <input type='text' />
                    </div>
                    <br />
                    <div>
                        <label>Email Id: </label><br />
                        <input type='text' />
                    </div>
                    <br />
                    <div>
                        <label>Select Breed: </label><br />
                        <select>
                            <option>Labra</option>
                            <option>German Shephard</option>
                            <option>Pitbull</option>
                            <option>American Beagle</option>
                        </select>
                    </div><br />
                    <input type='submit' value='submit' />
                </form>
            </div> */}
            <form action="index.html" method="post">
                

                <fieldset>

                    <legend>Book a Appointment</legend>

                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" required placeholder='Full Name'/>

                    <label for="email">Email:</label>
                    <input type="email" id="mail" name="user_email" required placeholder='Email ID'/>

                
                <label for="job">Select Breed:</label>
                <select id="job" name="user_job" required>
                    <option value='' disabled selected>select breed</option>
                    <option value="Labra">Labra</option>
                    <option value="German Shephard">German Shephard</option>
                    <option value="Pitbull">Pitbull</option>
                    <option value="American Beagle">American Beagle</option>  
                </select>
                      
                </fieldset>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default ServiceForm