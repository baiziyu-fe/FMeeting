interface IMeetRoomBase {
    id: string;
    name: string;
    position: string;
    max: number;
    status: boolean;
}
interface IMeetRoom extends IMeetRoomBase {
    avatar: string;
    icon: string;
}