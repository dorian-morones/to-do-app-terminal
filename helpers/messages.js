
require('colors');


const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('===================='.green);
        console.log('  Select an option'.magenta);
        console.log('====================\n'.green);
        
        console.log(`${'1.'.green} Add task`)
        console.log(`${'2.'.green} Show task`)
        console.log(`${'3.'.green} Show completed task`)
        console.log(`${'4.'.green} Show pending task`)
        console.log(`${'5.'.green} Complete task`)
        console.log(`${'6.'.green} Delete task`)
        console.log(`${'0.'.green} Exist \n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Select an option: ', (res) => {
            readline.close();
            resolve(res)
        })
    })
    
}

const pause = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Type ${'Entet'.blue} to continue`, () => {
            readline.close();
            resolve();
        });
    })
}

module.exports = { 
    showMenu,
    pause 
}