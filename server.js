const express = require('express');
const bodyParser = require('body-parser');

const {taxCategory} = require('./tax.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/store', (req,res) => {
    // console.log(req.body);
    // console.log(taxCategory);
    let reciept = req.body.map(item => { 

        // functon processItem(item){
        //     // calculate each item tax and discount 
        //     return new Promise(resolve, reject);
        // }

        let filter = taxCategory.filter(tempItem =>{
            if(tempItem.itemCategory == item.itemCategory){
                return tempItem;
            }
        });
        // console.log(filter);
// write proper rules configuration 
        let tax = filter[0].tax;
        item.taxAmount = (item.quantity * item.price)*(tax)/100;
        let totalAmount = (item.quantity * item.price)*(100+tax)/100;
        item.tax = tax;
        item.totalAmount = totalAmount;
        console.log(item);
        return item;
    });

    res.status(200).send(reciept);
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});



