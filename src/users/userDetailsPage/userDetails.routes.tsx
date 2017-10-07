import * as React from 'react';
import {Route ,Redirect, Switch} from "react-router"
import {UserDetailsPage} from './userDetailsPage';
import {NotFound} from '../../common/error/notFound';

export const route = <Route path="/users/:id" render={(props) => <UserDetailsPage {...props} />}/>

let routesArray: any = [];

export function addRoute(route: any) {
    routesArray.push(route);
}

export const Routes =
    (<Switch>
        {routesArray}
        <Route  path="/users/:id" render={(props) => <Redirect to={`/users/${props.match.params.id}/generalInfo`} />}/>
        <Route  path="*" render={(props) => <NotFound {...props} />}/>
    </Switch>);