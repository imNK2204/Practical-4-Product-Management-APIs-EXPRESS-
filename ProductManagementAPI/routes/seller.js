const express = require("express");
const router = express.Router();
router.use(express.json());

const seller = require("../modules/seller");

router.post("/add",(req,res) => {
    const sellerid = req.body.sellerid;
    const name = req.body.name;
    const productid = req.body.productids;
    
    const sname = seller.filter((s)=> s.name === name);
    if(sname.length === 0)
    {
        return res.json({ data:"Added seller details succesfully","seller id":sellerid,"name":name,"product ids":productid});
    }
    else
    {
        return res.json({ data:"seller name already taken"});
    }
});

router.post("/fetch",(req,res) => {
    const sellerid = req.body.sellerid;
    
    const cname = seller.filter((c)=> c.sellerid === sellerid);
    if(cname.length === 0)
    {
        return res.json({ data:"seller is not exists"});
    }
    else
    {
        return res.json({ data:cname});
    }
});

router.post("/update",(req,res) => {
    const sellerid = req.body.sellerid;
    
    const cname = seller.filter((c)=> c.sellerid === sellerid);
    if(cname.length === 0)
    {
        return res.json({ data:"seller is not exists"});
    }
    else
    {
        return res.json({ data:"Updated productlist Successfully"});
    }
});

router.post("/delete",(req,res) => {
    const sellerid = req.body.sellerid;
    
    const cname = seller.filter((c)=> c.sellerid === sellerid);
    if(cname.length === 0)
    {
        return res.json({ data:"seller is not exists"});
    }
    else
    {
        return res.json({ data:"Deleted seller Successfully"});
    }
});

module.exports = router;