import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [])
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    async function signUp() {
        let item = { name, password, email }
        console.log(item)
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add");
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Register page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
                <br></br>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                <br></br>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br></br>
                <button onClick={signUp} className="btn btn-primary">Sign up</button>
            </div>

        </>

    )
}

export default Register;