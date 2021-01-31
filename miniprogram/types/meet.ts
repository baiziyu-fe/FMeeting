interface IMeetBase {
    id: string;
    name: string;
    start: Date;
    end: Date;
    room: string;
}

export interface IMeet extends IMeetBase {
    member: string[];
    level: number;
}