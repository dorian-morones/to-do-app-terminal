const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Select an option',
        choices: [
            {
                value: '1',
                name: '1. Add task',
            },
            {
                value: '2',
                name: '2. Show task',
            },
            {
                value: '3',
                name: '3. Show completed task',
            },
            {
                value: '4',
                name: '4. Show pending task',
            },
            {
                value: '5',
                name: '5. Complete task',
            },
            {
                value: '6',
                name: '6. Delete task',
            },
            {
                value: '0',
                name: '0. Exit',
            },
        ]
    }
]
const inquirerMenu = async () => {
    console.log('===================='.green);
    console.log('  Select an option'.magenta);
    console.log('====================\n'.green);
    
    const { options } = await inquirer.prompt(questions)
    return options;
}

const pause =  async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'enter'.green} to continue`
        }
    ]
    await inquirer.prompt(question)
}

module.exports = {
    inquirerMenu,
    pause
}