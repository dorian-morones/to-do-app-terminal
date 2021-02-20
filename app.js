require('colors');

const {
    inquirerMenu,
    pause,
    readInput,
    listTaskToDelete,
    confirm,
    listTaskToUpdate
} = require('./helpers/inquirer');

const {
    saveToDB, readDb
} = require('./helpers/dbInteractions');

const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const dbList = readDb();

    if (dbList) {
        tasks.getTaskFromArr(dbList)
    };


    do {
        // Menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create task
                const desc = await readInput('descript: ');
                tasks.createTask(desc);

                break;
            case '2':
                tasks.fullTaskListUI();
                break;
            case '3':
                tasks.completedTaskListUI();
                break;
            case '4':
                tasks.pendingTaskListUI();
                break;
            case '5':
                const ids = await listTaskToUpdate(listToArr);;
                tasks.updateTaks(ids);
                break;
            case '6':
                const id = await listTaskToDelete(tasks.listToArr);
                if (id === 0) {
                    const ok = await confirm('Please confirm the delete');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log(`deleted`.red)
                    }
                }
                break;
        }

        saveToDB(tasks.listToArr);
        await pause();

    } while (opt !== '0')


}

main();