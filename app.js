require('colors');

const { 
    inquirerMenu, 
    pause, 
    readInput 
} = require('./helpers/inquirer');

const {
    saveToDB, readDb
} = require('./helpers/dbInteractions');

const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const dbList = readDb();

    if( dbList ){
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
        }

        saveToDB(tasks.listToArr);
        await pause();

    } while (opt !== '0')


}

main();