import { User } from '../models/user';


export class RoleValidator {
    isClient(user: User): boolean {
        return user.role === 'CLIENTE';
    }

    isCashier(user: User): boolean {
        return user.role === 'CAJERO';
    }

    isAdmin(user: User): boolean {
        return user.role === 'ADMIN';
    }
}
