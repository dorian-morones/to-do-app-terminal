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
                name: `${'1.'.green} Add task`,
            },
            {
                value: '2',
                name: `${'2.'.green} Show task`,
            },
            {
                value: '3',
                name: `${'3.'.green} Show completed task`,
            },
            {
                value: '4',
                name: `${'4.'.green} Show pending task`,
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task`,
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`,
            },
            {
                value: '0',
                name: `${'0'.brightYellow} Exit`,
            },
        ]
    }
]
const inquirerMenu = async () => {
    console.log('===================='.magenta);
    console.log('  Select an option'.white);
    console.log('====================\n'.magenta);
    
    const { options } = await inquirer.prompt(questions)
    return options;
}

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            valdiate(value){
                if(value.length === 0){
                    'This value is required'
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;

};

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
    pause,
    readInput
}