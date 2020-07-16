import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserPrincipal } from '../models/user-principal';

import * as _ from 'lodash';
import { IEvent } from '../models/event-planning';

export interface StorageItem {
    username: string;
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class StoreManagerService {

    constructor(
        private userStorage: Storage,
        private planningStorage: Storage
    ) {
        this.userStorage = new Storage({
            name: 'userStorageHealMe',
            storeName: '_userStorageHealMe'
        });

        this.planningStorage = new Storage({
            name: 'planningStorageHealMe',
            storeName: '_planningStorageHealMe'
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

    /**
     * Get event from storage planning
     * @param key
     */
    getEventPlanning(key: string): Promise<IEvent> {
        return this.planningStorage.get(key).then((value) => {
            if (value) {
                return JSON.parse(value);
            }
            return null;
        });
    }

    /**
     * Get event from storage planning
     * @param key
     */
    getPlanning(): Promise<IEvent[]> {
        const planning: IEvent[] = [];
        return this.planningStorage.forEach((value) => {
            const notif: IEvent = JSON.parse(value);
            notif.startTime = new Date(notif.startTime);
            notif.endTime = new Date(notif.endTime);
            planning.push(notif);
        }).then(() => {
            return planning;
        });
    }

    /**
     * Get event from storage planning
     * @param key
     */
    getMaxIdEvent(): Promise<number> {
        return this.getPlanning().then(planning => {
            return _.maxBy(planning, 'id').id;
        });
    }

    /**
     * Set Event Planning
     * @param event
     */
    setEventPlanning(event: IEvent): Promise<IEvent> {
        return this.planningStorage.set(event.id.toString(), JSON.stringify(event));
    }

    /**
     * Delete planning data
     */
    deletePlanningData(): Promise<void> {
        return this.planningStorage.clear();
    }
}
