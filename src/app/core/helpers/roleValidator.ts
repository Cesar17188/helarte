import { User } from '../models/user';


export class RoleValidator {
    isClient(user: User): boolean {
        return user.role === 'CLIENTE';
    }

    isAdmin(user: User): boolean {
        return user.role === 'ADMIN';
    }

    isCajero(user: User): boolean {
        return user.role === 'CAJERO';
    }
}
