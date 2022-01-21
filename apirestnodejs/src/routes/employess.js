const express= require('express');
const router=express.Router();

const mysqlConnection=require('./database');

router.get('/',(req,res) =>{
    mysqlConnection.query('SELECT * FROM employess',(err,rows,fields)=>{
        if (!err){
            res.send(rows);
        }else{
            console.log(err);
        }

    });
});
router.get('/:id',(req,res)=>{
    const { id }= req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM employess WHERE id=?',[id],(err,rows,fields)=>{
        if (!err){
            res.send(rows[0]);
        }else{
            console.log(err);
        }
    });
});
router.post('/',(req,res)=>{
    const {first_name, last_name,document_id} = req.body;
    const id=0;
    console.log(id, first_name, last_name,document_id);
    const query=`
    CALL employeeAddOrEdit(?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id, first_name, last_name,document_id], (err, rows, fields) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });

});
router.put('/:id', (req, res) => {
    const { first_name, last_name,document_id} = req.body;
    const { id } = req.params;
    const query = `
      CALL employeeAddOrEdit(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, first_name, last_name,document_id], (err, rows, fields) => {
      if(!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employess WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
module.exports=router;