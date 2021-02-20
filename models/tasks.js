
const Task = require('./task');

class Tasks {

    _list = {};

    get listToArr() {
        const list = [];

        Object.keys(this._list).forEach( key => {
            list.push(this._list[key])
        })

        return list;
    }

    constructor(){
        this._list = {};
    }

    getTaskFromArr(task = []){
        task.forEach( item => {
            this._list[item.id] = task;
        })
    }

    createTask(desc){
        const task = new Task(desc);
        
        this._list[task.id] = task;
    }

    fullTaskListUI() {
        this.listToArr.forEach( (item, index) => {
            const idx = `${index+1}`.green
            const { desc, completed_at } = item;
            const state = completed_at ? 'completed'.green : 'pending'.red
            console.log(`${idx} ${desc} :: ${state}`)
        })
    }
}

module.exports = Tasks;