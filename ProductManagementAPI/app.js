const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

const companyroute = require('./routes/company');
const productroute = require('./routes/product');
const sellerroute = require('./routes/seller');

app.get('/', (req, res) => res.send('Express APIs'));

app.use("/company",companyroute);
app.use("/product",productroute);
app.use("/seller",sellerroute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))