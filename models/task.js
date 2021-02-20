const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    desc = '';
    completed_at = null;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
        this.completed_at = null;
    }

}

module.exports = Task;