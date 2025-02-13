const connection = require('../../Model/db_config')

const deptGet = (req,res)=>{
     const sql =`select *from hptl_departments`
     connection.query(sql,(err,result)=>{
          if(err){
               console.log('dept data not getting...')
               res.json(err);
          }else{
               console.log('dept data getting succefully....')
               res.json(result)
          }
     })
}

const deptGetdata = (req,res)=>{

     const dept_id = req.params.dept_id;
     const sql =`select *from hptl_departments where dept_id = ?`
     connection.query(sql,[dept_id],(err,result)=>{
          if(err){
               console.log('dept data not getting...')
               res.json(err);
          }else{
               console.log('dept data getting succefully....')
               res.json(result[0])
          }
     })
}

const deptPost = async (req,res)=>{
     let deptData = req.body;
     let sql =`insert into hptl_departments set ?`
     connection.query(sql,deptData,(err,result)=>{
         if (err) {
                 console.log("Error occurred while adding department:", err);
                 res.status(500).json({ error: "An error occurred while adding department." });
             } else {
                 console.log('Department added successfully.');
                 res.json({ success: true, message: "Department added successfully.", data: result.data });
             }
     })
}

const deptUpdate = (req,res)=>{
     const sql =`update hptl_departments set ? where dept_id = ?`
     const data =req.body;
     const dept_id = req.params.dept_id;
     connection.query(sql,[data,dept_id],(err,result)=>{
          if(err){
               console.log('dept data not updated...')
               res.json(err);
          }else{
               console.log('dept data getting succefully....')
               res.json(result)
          }
     })
}

const deptDelete = (req,res)=>{
     const sql = `delete from hptl_departments where dept_id = ?`

     const dept_id =req.params.dept_id;
     connection.query(sql,dept_id,(err,result)=>{
          if(err){
               console.log("dept data not deleted...")
               res.json(err);
          }else{
               console.log("dept data deleted...")
               res.json(result)
          }
     })
}



module.exports={deptGet,deptPost,deptUpdate,deptDelete,deptGetdata}