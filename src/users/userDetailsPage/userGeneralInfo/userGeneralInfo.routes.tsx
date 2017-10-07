import * as React from 'react';
import {Route} from "react-router"
import {UserGeneralInfoPage} from './userGeneralInfoPage';

export const route = <Route path="/users/:id/generalInfo" render={(props) => <UserGeneralInfoPage {...props} />}/>