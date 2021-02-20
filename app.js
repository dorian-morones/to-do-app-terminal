require('colors');

const { 
    inquirerMenu, 
    pause, 
    readInput 
} = require('./helpers/inquirer');

const {
    saveToDB
} = require('./helpers/saveData');

const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

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
                console.log(tasks.listToArr);
                break;
        }

        saveToDB(tasks.listToArr);

        await pause();
    } while (opt !== '0')


}

main();