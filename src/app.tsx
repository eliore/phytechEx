import './assets/app.scss';
import * as React from 'react';

import {Header} from './common/header/header';
import users from './users';
import {Routes} from './app.routes';

export function startApp(stores: any) {
    let configPromise = new Promise((resolve: any, reject: any) => {
                users();

                resolve(true);
    });

    return (configPromise);
}

export class App extends React.Component<any> {
    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                {Routes}
            </div>);
    }
}