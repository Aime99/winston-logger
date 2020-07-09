const fs=require('fs');
fs.mkdir('Information',(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('folder created!');
    }

})

const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};


const logger = winston.createLogger(logConfiguration);

logger.log({
    message: 'Hello, Winston!',
    level: 'info'
});
logger.info('Hello, Winston!');

const winston = require('winston');


const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: './information/example.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

logger.info('Hello, Winston!');