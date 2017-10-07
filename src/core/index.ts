import {HttpClient} from './httpClient';

const appStorage = window.localStorage;

const httpClient = new HttpClient();

export {
    appStorage,
    httpClient
};


