import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
      });
      const navigate = useNavigate();


      function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        if (input.email==="" && input.password==="") {
             toast.error("fill details");   
        } 
        else {
            navigate("/login");
        }
        
      }
    return (
        <>
            <div className='container'>
                <form>
                    <h2>Signup</h2>
                    <input type="text" required  placeholder="Full Name" onChange={e => setInput({ ...input, [e.target.name]: e.target.value, })} value={input.name} name="name"
                    />
                    <br />
                    <input type="email" required placeholder="Email ID" onChange={e => setInput({ ...input, [e.target.name]: e.target.value, })} value={input.email} name="email"
                    />
                    <br />
                    <input type="password" required  placeholder="Password" onChange={e => setInput({ ...input, [e.target.name]: e.target.value, })} value={input.password} name="password"
                    />


                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="btn btn-primary btn-lg"
                        >
                            Register
                        </button>
                    </div>
                </form >
            </div>
<ToastContainer/>
        </>
    )
}

export default SignUp