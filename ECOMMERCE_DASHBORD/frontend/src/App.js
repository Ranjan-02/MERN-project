import "./App.css";
import Navbar from "./component/Nabar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Signup from "./component/Signup";
import PriveteComponent from "./component/PriveteComponent";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductsList from "./component/ProductsList";
import UpdateProduct from "./component/UpdateProduct";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route element={<PriveteComponent />}>

                        <Route path="/" element={<ProductsList />}></Route>
                        <Route path="/add" element={<AddProduct />}></Route>
                        <Route path="/update/:id" element={<UpdateProduct />}></Route>
                        <Route path="/profile" element={<h1>profile compoment</h1>}></Route>
                        <Route path="/logout" element={<h1>logout compoment</h1>}></Route>

                    </Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
};

export default App;
