import {getAppStore} from './app.store';
import initialState from './state.defaults';

export default {
    configureStores: function (dependencies: any, initialState: any) {
        const appStore = getAppStore(dependencies, initialState);

        return {
            appStore
        }
    },
    initialState
}