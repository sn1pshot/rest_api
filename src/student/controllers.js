const pool = require('../../db');
const queries = require('./queries')
const getstudents = (req,res) =>{
    pool.query(queries.getstudents,(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}
const getstudentbyid = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getstudentbyid,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const createstudent = (req,res) =>{
    const {name,email,age,dob} = req.body;
    pool.query(queries.emailexists,[email],(error,results)=>{
        if(results.rows.length){
            res.send('email exists')
        }
        else{
            pool.query(queries.createstudent,[name,email,age,dob],(error,results)=>{
                if(error) throw error;
                res.status(201).send('Student created')
            })
        }

    })
}
const deletestudent = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getstudentbyid,[id],(error,results)=>{
        const nostudent = !results.rows.length;
        if(nostudent){
            res.send('no student with that id')
        }
        else{
            pool.query(queries.deletestudent,[id],(error,results)=>{
                if (error) throw error;
                res.status(200).send('student deleted')
            })
        }

    })
}
const updatestudent = (req,res) =>{
    const id = parseInt(req.params.id)
    const {name,email,age,dob} = req.body
    pool.query(queries.getstudentbyid,[id],(error,results)=>{
        const nostudent = !results.rows.length;
        if(nostudent){
            res.send('no student with that id')
        }
        else{
            pool.query(queries.updatestudent,[id,name,email,age,dob],(error,results)=>{
                    if (error) throw error;
                    res.status(200).send('student updated')
            })
        }
    }
    )
}
module.exports = {
    getstudents,
    getstudentbyid,
    createstudent,
    deletestudent,
    updatestudent
};