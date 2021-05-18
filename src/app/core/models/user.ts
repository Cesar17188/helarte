export type Roles = 'ADMIN' | 'CLIENTE' | 'CAJERO';

export interface User {
    uid?: string;
    email?: string;
    password?: string;
    photoURL?: string;
    displayName?: string;
    phoneNumber?: string;
    emailVerified?: boolean;
    providerId?: string;
    role?: Roles;
}

