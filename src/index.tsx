import * as React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import { App, startApp } from "./app";
import {ErrorPage} from "./common/error/errorPage";
import * as dependencies from './core';
import manageStores from './stores';

useStrict(true);

const stores: any = manageStores.configureStores(dependencies, manageStores.initialState);

startApp(stores).then((success: any)=>{
    const history = createBrowserHistory();

    if (location.pathname === '/') {
        history.push("/users");
    }

    if (success) {
        render(
            <Provider {...stores}>
                <Router history={history}>
                    <App stores={stores}/>
                </Router>
            </Provider>,
            document.getElementById("app")
        );
    }
}).catch((error: any) => {
    render(
        <ErrorPage error={error}></ErrorPage>,
        document.getElementById("app"));
});