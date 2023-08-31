import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logOut = () => {
        console.log('logout...');
        localStorage.clear();
        navigate("/signup")
    }

    return (

        <>
            {
                auth ?
                    <ul className="ul-li">
                        <li><Link to="/">product</Link></li>
                        <li><Link to="/add">add product</Link></li>
                        <li><Link to="/update">update product</Link></li>
                        <li><Link to="/profile">profile</Link></li>
                        <li><Link onClick={logOut} to="/signup">logout ({JSON.parse(auth).name}) </Link></li>

                    </ul>

                    :
                    <ul className="ul-li nav-right">
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/signup">sign up</Link></li>
                    </ul>

            }


        </>


    );
}
export default Navbar;
