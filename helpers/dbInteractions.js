const fs = require('fs');

const file = './db/data.json';

const saveToDB = ( data ) => {
    fs.writeFileSync(file, JSON.stringify(data))
}

const readDb = () => {

    if(!fs.existsSync(file)){
        null
    }

    const info = fs.readFileSync(file, {encoding: 'utf-8'})
    const data = JSON.parse(info)
    return data;
}

module.exports = {
    saveToDB,
    readDb
}