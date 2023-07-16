import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    function handleLogin(e) {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user")); 

        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("loggedin", true);
            navigate("/homepage");
        } 
        else if(!input.email && !input.password ){
            toast.error("fill details");
        }
        else {
            toast.error("Invalid Credentials");
        }
    }
    return (
        <>
            <div className='container'>
                <form>
                    <h2>Login</h2>

                    <input type="email" placeholder="Email ID" onChange={e => setInput({ ...input, [e.target.name]: e.target.value, })} value={input.email} name="email"
                    />
                    <br />
                    <input type="password" placeholder="Password" onChange={e => setInput({ ...input, [e.target.name]: e.target.value, })} value={input.password} name="password"
                    />


                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                            onClick={handleLogin}
                            type="button"
                            className="btn btn-primary btn-lg"
                            style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                        >
                            Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <Link to="/" className="link-danger">
                                Register
                            </Link>
                        </p>
                    </div>
                </form >
                
            </div>
            <ToastContainer />
        </>
    )
}

export default Login