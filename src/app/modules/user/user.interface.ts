import { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER ADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
    GUIDE = "GUIDE",
}
//auth providers
/**
 * email, password,
 * google authentication
 */

export interface IAuthProvider {
    provider : string; //google, credential
    providerId : string;
}

export enum isActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
}

export interface IUser {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    isDeleted?: string;
    isActive?: isActive;
    isVerified?: string;
    role: Role;
    auth: IAuthProvider[];
    booking?: Types.ObjectId[]
    guides?:  Types.ObjectId[]
}