import {ajax} from 'jquery';
import {isObject, isUndefined, isString} from "lodash";

class HttpClient {
    lastRequstsPromises: any

    constructor() {
        this.lastRequstsPromises = {};
    }

    executeRequest(options: any) {
        let uniqKey = options.url + (isObject(options.data)
            ? "?data=" + JSON.stringify(options.data)
            : (isObject(options.params)
                ? "?params=" + JSON.stringify(options.params)
                : ""));

        if (!isUndefined(this.lastRequstsPromises[uniqKey])) {
            return (this.lastRequstsPromises[uniqKey]);
        }

        let currentPromise = (new Promise((resolve, reject) => {
            return (ajax(options).done(resolve).fail(reject));
        }).catch((error: any) => {
            throw (error);
        }));

        this.lastRequstsPromises[uniqKey] = currentPromise;

        return (currentPromise);
    }

    get(options : string | any){
        options = isString(options) ? {url: options, method: 'GET'} : {options, ...{method: 'GET'}};
        return (this.executeRequest(options));
    }

    post(options : any){
        options = {options, ...{method: 'POST'}}
        return (this.executeRequest(options));
    }

    put(options : any){
        options = {options, ...{method: 'PUT'}}
        return (this.executeRequest(options));
    }

    patch(options : any){
        options = {options, ...{method: 'PATCH'}}
        return (this.executeRequest(options));
    }

    delete(options : string | any){
        options = isString(options) ? {url: options, method: 'DELETE'} : {options, ...{method: 'DELETE'}};
        return (this.executeRequest(options));
    }

    buildQueryString(queryDictionery: any, encodeUri: any) {
        var queryValues = [];

        for (var attrname in queryDictionery) {
            queryValues.push(attrname + '=' + (isObject(queryDictionery[attrname])
                ? encodeURIComponent(JSON.stringify(queryDictionery[attrname]))
                : encodeUri
                    ? encodeURI(queryDictionery[attrname].toString())
                    : queryDictionery[attrname].toString()));
        }

        return (queryValues && queryValues.length ? '?' + queryValues.join('&') : '');
    }
}

export {HttpClient};