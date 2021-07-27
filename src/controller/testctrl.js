
const fs = require('fs');
const path = require("path");
const putfunc = require('./putfunc')
function getTest(req, res) {

    res.sendFile('./text.txt', { root: __dirname }, (error) => {
        if (error) res.send({ error: error, massage: "error whit the file" })
    })


}
function postTest(req, res) {

    try {
        fs.promises.writeFile("./post-file.txt", JSON.stringify(req.body), (error) => {
            if (error) throw error
        })
            .then(() => {
                res.send("writin to the file was a success")
            })
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
async function deletFunc(req,res){
    let todo = []
    const index = await putfunc.getIndexById(req.params.id)
    todo = await putfunc.read()
    todo.splice(index,1)
    await putfunc.save()
    res.send("yes")
}
module.exports = {
    getTest,
    postTest,
    putTest,
    deletFunc
}