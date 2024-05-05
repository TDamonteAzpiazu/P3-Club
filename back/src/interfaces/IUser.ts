import ICredentials from "./ICredentials";

interface IUser {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    credentialsId: ICredentials["id"];
}

export default IUser