import { Address } from './address';

export class User {
    userId:string;
    userName:string;
    emailId:string;
    contactNumber:string;
    password:string;
    dateOfBirth:string;
    addresses:Address[];
}