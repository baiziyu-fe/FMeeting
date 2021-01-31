export interface IUserBaseInfo {
    name: string;
    company: string;
    department: string;
    id: string;
    tel: string;
    position?: string;
}

export interface IUserInfo extends IUserBaseInfo {
    nickName?: string;
    school?: string;
}