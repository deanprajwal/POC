import winston from 'winston';

export default class CustomLogger{

    constructoer(){}

    private now=new Date();
    todayDate=this.now.getFullYear()+"-"+this.now.getMonth()+"-"+this.now.getDate();

     options={
        level:'info',
        transports:[
            new winston.transports.Console({
                level:'info',
            }),
            new winston.transports.File({
                level:'info',
                filename:process.env.LoggerPath+"/"+this.todayDate+'/logs.log',
            })
        ],
    }

    private logger=winston.createLogger(this.options);

    public logInfo(message:string){
        this.logger.info(message);
    }
}


