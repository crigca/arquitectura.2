
export class Logger {
    private static instance: Logger;
    private logCounter: number;

    private constructor(logCounter: number) {
        this.logCounter = logCounter;

    }

    static getInstance(logCounter: number = 0): Logger{
        if(!Logger.instance) {
            Logger.instance = new Logger(logCounter);
        }else {
            console.log("Ya existe una instancia Logger");
        }
        return Logger.instance;
    }

    showMessage(message:string):void{
        this.logCounter ++;
        console.log(`${this.logCounter}: ${message}`);
    }
}




