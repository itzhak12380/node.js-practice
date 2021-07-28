
const fs = require('fs');
const path = require("path");
const putfunc = require('./putfunc')
const Pool = require('../DB/mySqlConnection')
function getTest(req, res) {

    // res.sendFile('./text.txt', { root: __dirname }, (error) => {
    //     if (error) res.send({ error: error, massage: "error whit the file" })
    // })
try {
    Pool.query('select * from students ', (err, resopnce, fields) => {
        if (err) throw err;
        console.log(resopnce);
        res.send(resopnce)
        // resopnce.forEach(element => {
        //     console.log(element);
        //     for (const key in element) {
        //         console.log(key, element[key]);
                
        //     }
        // });
    }); 
} catch (error) {
    res.send(`${erorr} this is an error`)
}


}
function postTest(req, res) {

    try {
     Pool.query('insert into students(first_name,last_name,age) values("hana","amara",26)', (err, resopnce, fields) => {
        if (err) throw err;
        console.log(resopnce);
        res.send(resopnce)
    }); 
    } catch (error) {
        res.send({ error: error, massage: "error whit reading file" })
    }



}

async function putTest(req, res) {
    let todo = []
    const id = await req.params.id;
    const index = await putfunc.getIndexById(id)
    todo = await putfunc.read()
    todo[index].name = req.body.name
    await putfunc.save();

    res.send("ok");
}
async function deletFunc(req, res) {
    let todo = []
    const index = await putfunc.getIndexById(req.params.id)
    todo = await putfunc.read()
    todo.splice(index, 1)
    await putfunc.save()
    res.send("yes")
}
function getParamsTest(req, res) {
    try {
        res.send(`hello there${req.params.fname}`);
        console.log("data sent succesfully");
    } catch (error) {
        res.send({ error: error, massage: "bad request" });
    }
}
module.exports = {
    getTest,
    postTest,
    putTest,
    deletFunc
}