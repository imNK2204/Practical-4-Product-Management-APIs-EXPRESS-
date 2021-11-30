const express = require("express");
const router = express.Router();
router.use(express.json());

const product = require("../modules/product");

router.post("/add",(req,res) => {
    const productid = req.body.productid;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const companyid = req.body.companyid;
    const sellerid = req.body.sellerid;
    
    const pname = product.filter((p)=> p.title === title);
    if(pname.length === 0)
    {
        return res.json({ data:"Added Product details succesfully","product id":productid,"title":title,"price":price,"category":category,"company id":companyid,"seller id":sellerid});
    }
    else
    {
        return res.json({ data:"Product title already taken"});
    }
});

router.post("/fetch",(req,res) => {
    const productid = req.body.productid;
    
    const cname = product.filter((c)=> c.productid === productid);
    if(cname.length === 0)
    {
        return res.json({ data:"product is not exists"});
    }
    else
    {
        return res.json({ data:cname});
    }
});

router.post("/update",(req,res) => {
    const productid = req.body.productid;
    
    const cname = product.filter((c)=> c.productid === productid);
    if(cname.length === 0)
    {
        return res.json({ data:"product is not exists"});
    }
    else
    {
        return res.json({ data:"Updated productlist Successfully"});
    }
});

router.post("/delete",(req,res) => {
    const productid = req.body.productid;
    
    const cname = product.filter((c)=> c.productid === productid);
    if(cname.length === 0)
    {
        return res.json({ data:"product is not exists"});
    }
    else
    {
        return res.json({ data:"Deleted product Successfully"});
    }
});

module.exports = router;