export type Roles = 'ADMIN' | 'CLIENTE';

export interface User {
    uid?: string;
    email?: string;
    password?: string;
    photoURL?: string;
    displayName?: string;
    emailVerified?: boolean;
    role?: Roles;
}

