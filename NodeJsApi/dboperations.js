var config = require('./dbconfig');
const sql = require('mssql');


//get
async function getOrders() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Order");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }
}


//getbyid
async function getOrder(orderId) {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from Order where Id = @input_parameter");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

//add
async  function  addOrder(order) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('Id', sql.Int, order.Id)
      .input('Title', sql.NVarChar, order.Title)
      .input('Quantity', sql.Int, order.Quantity)
      .input('Message', sql.NVarChar, order.Message)
      .input('City', sql.NVarChar, order.City)
      .execute('InsertOrders');////stored procedure
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

module.exports = {
    getOrders : getOrders,
    getOrder : getOrder,
    addOrder : addOrder
}