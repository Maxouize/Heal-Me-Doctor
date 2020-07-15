import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserPrincipal } from '../models/user-principal';

import * as _ from 'lodash';
import { switchMap } from 'rxjs/operators';

export interface StorageItem {
    username: string;
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class StoreManagerService {

    constructor(
        private userStorage: Storage
    ) {

        this.userStorage = new Storage({
            name: 'userStorageHealMe',
            storeName: '_userStorageHealMe'
        });
    }

    /**
     * Get user from storage user
     * @param key
     */
    getUser(key: string): Promise<UserPrincipal> {
        return this.userStorage.get(key).then((value) => {
            if (value) {
                return JSON.parse(value);
            }
            return null;
        });
    }

    /**
     * Set User
     * @param ref
     */
    setUser(user: UserPrincipal): Promise<any> {
        return this.userStorage.set(user.userLogin.toString(), JSON.stringify(user));
    }

    /**
     * Delete user
     * @param key
     */
    deleteUserData(): Promise<void> {
        return this.userStorage.clear();
    }
}
