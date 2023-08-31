import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);




    async function hendleLogin() {

        if (!email || !password) {
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.log(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        } else {
            alert("Enter correct deatails");
        }

    }
    const navigate = useNavigate();
    useEffect(() => {
        hendleLogin()
        const auth = localStorage.getItem(JSON.stringify("user"));
        if (auth) {
            navigate("/");

        }
    }, []);


    return (
        <>
            <div className="signUpBox">
                <h1>login </h1>

                <input className="inputBox" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter Email" />
                {error && !email && <span>Enter Valid Email</span>}
                <input className="inputBox" value={password} onChange={(e) => { setPassword(e.target.value) }} type="Password" placeholder="Enter Password" />
                {error && !password && <span>Enter Valid Password</span>}
                <button className="inputBox" onClick={hendleLogin} type="submit">Log In</button>

            </div>


        </>
    );
};

export default Login;