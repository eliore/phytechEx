import { action, observable} from 'mobx';
import {getUsersStore} from './users.store';

class AppStore {
    httpClient: any;
    appStorage: any;
    usersStore: any;

    constructor(dependencies: any, initialState: any){
        const {currentTab} = initialState;
        const {
            httpClient,
            appStorage
        } = dependencies;

        this.httpClient = httpClient;
        this.appStorage = appStorage;
        this.currentTab  = currentTab;

        this.usersStore = getUsersStore(dependencies, initialState);
    }

    @observable currentTab: any;
    @action changeTab(currentTab: any){
        this.currentTab = currentTab;
    }
}

export function getAppStore(dependencies: any, initialState: any) {
    return (new AppStore(dependencies, initialState));
}

