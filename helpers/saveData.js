const fs = require('fs');

const saveToDB = ( data ) => {
    const file = './db/data.json';

    fs.writeFileSync(file, JSON.stringify(data))
}

module.exports = {
    saveToDB
}