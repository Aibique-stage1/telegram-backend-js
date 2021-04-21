
export  interface FullMessage {
    user?: string,
    name?: string,
    age?: number,
    message?: string,
    date?: Date
}

export interface Empty {}
export interface TheUser {
    user: string;
}
export interface User {
    name: string;
    age?: number;
}