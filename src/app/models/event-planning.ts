export interface IEvent {
    id: number;
    title: string;
    desc: string;
    startTime: Date;
    endTime: Date;
}

export class Event implements IEvent {
    id: number;
    title: string;
    desc: string;
    startTime: Date;
    endTime: Date;

    constructor(id: number,
                title: string,
                desc: string,
                startTime: Date,
                endTime: Date) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
