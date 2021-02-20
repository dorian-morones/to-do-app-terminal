require('colors');

const { 
    inquirerMenu, 
    pause, 
    readInput 
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create task
                const desc = await readInput('descript: ');
                tasks.createTask(desc);

                break;
            case '2':
                console.log(tasks._list);
                break;
        }

        await pause();
    } while (opt !== '0')


}

main();