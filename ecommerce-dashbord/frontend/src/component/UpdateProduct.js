import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        getProductDitails();

    }, [])


    async function getProductDitails() {
        let result = await fetch(`http://localhost:5000/update/${params.id}`)
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCatagory(result.catagory);
        setCompany(result.company);
    }
    async function updateProduct() {
        let result = await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, catagory, company }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.log(result);
        navigate("/");
    }

    return (
        <div className="signUpBox">

            <h1>Update Product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Product Name" />

            <input className="inputBox" type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Price" />

            <input className="inputBox" type="text" value={catagory} onChange={(e) => { setCatagory(e.target.value) }} placeholder="Catagory" />

            <input className="inputBox" type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} placeholder="Company Name" />

            <button className="inputBox" type="submit" onClick={updateProduct}> Update Product</button>
        </div>

    )
}

export default UpdateProduct;