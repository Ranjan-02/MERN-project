import React, { useState } from "react";
import { useNavigate } from "react-router-dom"



const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    async function addProduct() {

        if (!name || !price || !catagory || !company) {
            setError(true);
            return false;
        }

        const userID = JSON.parse(localStorage.getItem("user"))._id;

        console.log(userID);
        console.log(name, price, catagory, company, userID);
        let featchResult = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, catagory, company, userID }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        featchResult = await featchResult.json();
        console.log(featchResult);


        setName("");
        setCatagory("");
        setCompany("");
        setPrice("");

        alert("product succesfully addProduct...")
        navigate("/")
    };


    return (
        <div className="signUpBox">

            <h1>Add Product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Product Name" />
            {error && !name && <span>please valid product name</span>}

            <input className="inputBox" type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Price" />
            {error && !price && <span>please valid price</span>}

            <input className="inputBox" type="text" value={catagory} onChange={(e) => { setCatagory(e.target.value) }} placeholder="Catagory" />
            {error && !catagory && <span>please valid catagory</span>}

            <input className="inputBox" type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} placeholder="Company Name" />
            {error && !company && <span>please valid company</span>}

            <button className="inputBox" type="submit" onClick={addProduct}> Add Product</button>
        </div>

    )
}
export default AddProduct; 