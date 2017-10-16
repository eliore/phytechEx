import {action, runInAction, observable} from 'mobx';

class UsersStore {
    httpClient: any;
    appStorage: any;

    USERS_API: any;

    @observable users: any[];
    @observable loadingUsers: boolean;
    @observable currentUser: any;
    @observable getUserError: any;
    lastUserId: number;

    constructor(initialStore: any) {
        this.httpClient = initialStore.httpClient;
        this.appStorage = initialStore.appStorage;

        this.USERS_API = "https://api.github.com/users";

        this.users = initialStore.users;
        this.loadingUsers = initialStore.loadingUsers;
        this.currentUser = initialStore.currentUser;
        this.lastUserId = initialStore.lastUserId;
    }

    @action
    async getUsers() {
        try {
            const url = this.lastUserId ? `${this.USERS_API}?since=${this.lastUserId}` : this.USERS_API;

            runInAction(() => {
                this.loadingUsers = true;
            });

            let users = await this.httpClient.get(url);
            this.lastUserId = users[users.length - 1].id;

            runInAction(() => {
                this.users = [...this.users, ...users];
                this.loadingUsers = false;
                console.log('get users success');
            });
        }
        catch (error) {
            console.log('get users error', error);
        }
    }

    async getUser(username: any) {
        try {
            runInAction(() => {
                this.currentUser = null;
                this.getUserError = null;
            });

            let user = await this.httpClient.get(`${this.USERS_API}/${username}`);

            runInAction(() => {
                this.currentUser = user;
                console.log('currentUser success');
            });
        }
        catch (error) {
            runInAction(() => {
                this.getUserError = error;
                console.log('currentUser error', error);
            });
        }
    }
}

export function getUsersStore(dependencies: any, initialState: any) {
    const {httpClient, appStorage} = dependencies;
    const {currentUser, users, lastUserId, loadingUsers} = initialState;

    return ( new UsersStore({httpClient, appStorage, currentUser, users, lastUserId, loadingUsers}));
}
