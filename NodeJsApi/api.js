const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Order = require('./order');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);



router.use((req,res,next) => {
    console.log('middleware');
    next();
})

router.route('/orders').get((req,res) => {
    dboperations.getOrders().then(result => {
    //console.log(result);
    res.json(result[0]);
    })
})

router.route('/orders/:id').get((req,res) => {
    dboperations.getOrder(req.params.id).then(result => {
    res.json(result[0]);
    })
})

router.route('/orders').post((req,res) => {

    let addOrder = {...req.body}

    dboperations.addOrder(order).then(result => {
        res.status(201).json(result);
    })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);



