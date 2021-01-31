interface IFileBase {
    name: string;
    id: string;
    url: string;
    type: string;
    author: string;
    size: number;
}
interface IFile extends IFileBase {
    meet: string;
    department: string;
}

