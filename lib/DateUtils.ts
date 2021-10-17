declare global {
    interface Date {
        min(): TMin;
        day(): TDay;
    }
}

class TDateExtender {
    protected mDate: Date;
    constructor(ADate: Date) {
        this.mDate = ADate;
    }
}

class TMin extends TDateExtender {
    add(mins: number) {
        JSDateAddMins(this.mDate, mins);
    }
}

class TDay extends TDateExtender {
    add(days: number) {
        JSDateAddDays(this.mDate, days);
    }
}

Date.prototype.min = function (): TMin {
    let result = this;
    return new TMin(result);
}

Date.prototype.day = function (): TDay {
    let result = this;
    return new TDay(result);
}

function JSDateAddDays(time: Date, days: number) {
    let daysInMins = days * 24 * 60;
    JSDateAddMins(time, daysInMins);
}

function JSDateAddMins(time: Date, mins: number) {
    let minsInMS = mins * 60 * 1000;
    let result = time.getTime() + minsInMS;
    time.setTime(result); // update the reference
}

const DateUtils = {
    JSDateAddDays,
    JSDateAddMins
}

export default DateUtils;
