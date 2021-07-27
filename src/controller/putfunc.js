const fs = require('fs')
const path = require('path')

async function read() {
    try {
        let jsonpath = await path.join(__dirname, 'store.json')
        let text = JSON.parse(await fs.readFileSync(jsonpath, 'utf8').toString())
        return this.todo = text
    } catch (error) {
        console.log(error);
    }
    return this.todo
}
async function save() {
    let jsonpath = await path.join(__dirname, 'store.json')
    return await fs.writeFile(jsonpath, JSON.stringify(this.todo), (err) => { console.log(err); })
}

async function getIndexById(id) {
    try {
        const todo = await read()
        return todo.findIndex(to => to.id === +id);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {read,save,getIndexById}