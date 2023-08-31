import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () => {
        let result = await fetch("http://localhost:5000/products-list");
        result = await result.json();
        setProducts(result);
    }


    const deleteProduct = async (id) => {
        console.log(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert("succesfully deleleted....")
            GetData();

        }
    }

    async function searchHandle(event) {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {

                setProducts(result)
            }
        } else {
            GetData();
        }




    }

    return (
        <>
            <div className="productList">
                <h1>Product List</h1>
                <input type="text" placeholder="search Product" className="productInput" onChange={searchHandle} />
                <ul>
                    <li>SL No.</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Catagory</li>
                    <li>Company</li>
                    <li>Oparation</li>
                </ul>
                {
                    products.length ? products.map((iteam, index) =>
                        <ul key={iteam._id}>
                            <li>{index + 1}</li>
                            <li>{iteam.name}</li>
                            <li>$ {iteam.price}</li>
                            <li>{iteam.catagory}</li>
                            <li>{iteam.company}</li>
                            <li><button onClick={() => deleteProduct(iteam._id)}>Delete</button>
                                <button className="btn-update"><Link to={"/update/" + iteam._id}>Update</Link></button>
                            </li>
                        </ul>
                    ) : <h1>result not found</h1>
                }




            </div>


        </>

    )
}
export default ProductsList;