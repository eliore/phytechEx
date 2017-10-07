import * as React from 'react';
import {Route} from  'react-router';
import {UserListPage} from './userListPage';

export const route = <Route exact path="/users" render={(props) => <UserListPage {...props} />}/>;

