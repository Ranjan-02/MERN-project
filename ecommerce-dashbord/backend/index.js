const express = require("express");
const cors = require("cors");
require("./db/config");
const users = require("./db/user");
const app = express();
const Product = require("./db/poduct");
const jwt = require("jsonwebtoken");
const jwtkey = "e-commerce";
app.use(express.json());

app.use(cors());

app.post("/register", async (req, resp) => {
    const data = new users(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);

})

app.post("/login", async (req, resp) => {

    const data = await users.findOne(req.body).select("-password");
    if (req.body.email && req.body.password) {
        if (data) {
            jwt.sign({ data }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "data not found try some time" });

                }
                resp.send({ data, auth: token });
            })

        } else {
            resp.send({ result: "data not found" });
        }
    } else {
        resp.send({ result: "data not found" });
    }


});

app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)

});

app.get("/products-list", async (req, resp) => {
    let result = await Product.find();
    resp.send(result);
})

app.delete("/product/:id", async (req, resp) => {

    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result)

})
app.get("/update/:id", async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "not found" })
    }
})
app.put("/update/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result)
})

// search API

app.get("/search/:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [

            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { catagory: { $regex: req.params.key } },
        ]
    });
    resp.send(result)
})

app.listen(5000);
