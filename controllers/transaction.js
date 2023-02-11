var express = require('express');
var router = express.Router();
var fs = require("fs");
var {Client} = require("pg");
const config =   require("./config");

//connect to Postgres
const database = new Client(config);

database.connect(function(err) {
  if (err) throw err;
});

router.get('/:receipt/:status', async (req, res) => {
  let purchase = await set_purchase_status(req.params.receipt, req.params.status);
  res.status(200).send({message:`Transaction status for receipt ${req.params.receipt} updated with status: ${req.params.status}`, purchases: JSON.stringify(purchase)});
});

var set_purchase_status = async function(purchase_id, status){
  let query = `Update purchase SET transaction_result = ${status} WHERE title = '${purchase_id}' RETURNING *;`;
  console.log(query);
  let purchase;
  try{
      purchase = await database.query(query);
      return purchase.rows;

  }catch(err){
      console.log(err.stack);
  }

}

module.exports = router;
