
const Task = require('./task');

class Tasks {

    _list = {};

    get listToArr() {
        const list = [];

        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });

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

    completedTaskListUI() {
        this.listToArr.forEach( (item, index) => {
            const idx = `${index+1}`.green
            const { desc, completed_at } = item;
            completed_at && console.log(`${idx} ${desc}`);
        })
    }

    pendingTaskListUI() {
        this.listToArr.forEach( (item, index) => {
            const idx = `${index+1}`.green
            const { desc, completed_at } = item;
            !completed_at && console.log(`${idx} ${desc}`);
        })
    }

    deleteTask(id) {
        if(this._list[id]){
            delete this._list[id];
        }
    }

    updateTaks(ids){
        ids.forEach( id => {
            const task = this._list[id];
            if( !task.completed_at ){
                task.completed_at = new Date().toISOString();
            }
        });

        this.listToArr.forEach( item => {
            if(!ids.includes(item.id)){
                const task = this._list[item.id]
                task.completed_at = null;
            }
        })
    }
}

module.exports = Tasks;