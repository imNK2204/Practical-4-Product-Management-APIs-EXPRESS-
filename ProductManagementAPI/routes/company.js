const express = require("express");
const router = express.Router();
router.use(express.json());

const company = require("../modules/company");

router.post("/add",(req,res) => {
    const companyid = req.body.companyid;
    const name = req.body.name;
    const productid = req.body.productids;
    
    const cname = company.filter((c)=> c.name === name);
    if(cname.length === 0)
    {
        return res.json({ data:"Added Company details succesfully","company id":companyid,"name":name,"product ids":productid});
    }
    else
    {
        return res.json({ data:"Company name already taken"});
    }
});

router.post("/fetch",(req,res) => {
    const companyid = req.body.companyid;
    
    const cname = company.filter((c)=> c.companyid === companyid);
    if(cname.length === 0)
    {
        return res.json({ data:"Company is not exists"});
    }
    else
    {
        return res.json({ data:cname});
    }
});

router.post("/update",(req,res) => {
    const companyid = req.body.companyid;
    
    const cname = company.filter((c)=> c.companyid === companyid);
    if(cname.length === 0)
    {
        return res.json({ data:"Company is not exists"});
    }
    else
    {
        return res.json({ data:"Updated productlist Successfully"});
    }
});

router.post("/delete",(req,res) => {
    const companyid = req.body.companyid;
    
    const cname = company.filter((c)=> c.companyid === companyid);
    if(cname.length === 0)
    {
        return res.json({ data:"Company is not exists"});
    }
    else
    {
        return res.json({ data:"Deleted Company Successfully"});
    }
});

module.exports = router;