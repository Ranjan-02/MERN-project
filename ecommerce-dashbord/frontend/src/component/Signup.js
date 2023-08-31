import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);




    async function collectData() {

        if (!name || !email || !password) {
            setError(true);
            return false;
        }

        console.log(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");

    }
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, []);

    return (
        <div className="signUpBox">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name" />
            {error && !name && <span>Enter Valid Name</span>}

            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" />
            {error && !email && <span>Enter Valid Name</span>}

            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            {error && !password && <span>Enter Valid Name</span>}

            <button className="inputBox" type="submit" onClick={collectData}>Sign Up</button>
        </div>

    )
}

export default Signup;