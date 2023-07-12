class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        const duplicate = this.alarmCollection.find((obj) => obj.time == time)
        if(duplicate) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({time: time, callback: callback, canCall: true})
    }

    removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((obj) => obj.time != time)
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return date.toLocaleString("ru", {
            hour: "numeric",
            minute: "numeric"
        })
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((obj) => {
                if(obj.time == this.getCurrentFormattedTime() && obj.canCall) {
                    obj.canCall = false;
                    obj.callback();
                } 
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((obj) => {
                obj.canCall = true;
            } 
        )
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}