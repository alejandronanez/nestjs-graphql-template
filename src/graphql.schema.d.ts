
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getUsers(data?: string): User[] | Promise<User[]>;
}

export class User {
    firstName: string;
    lastName: string;
    email: string;
}
