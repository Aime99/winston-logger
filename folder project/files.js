const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.printf(info => `${info.message}`),
    transports: [
      new winston.transports.File({
        filename: './information/example5.log'
        maxsize:10000
      })
    ]
  });

logger.info('What rolls down stairs');
logger.info('alone or in pairs,');
logger.info('and over your neighbors dog?');
logger.warn('Whats great for a snack,');
logger.info('And fits on your back?');
logger.error('Its log, log, log');
