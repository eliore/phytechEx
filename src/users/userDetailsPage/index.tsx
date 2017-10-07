import {addRoute} from '../../app.routes';
import {route} from './userDetails.routes';
import userGeneralInfo from './userGeneralInfo';

export default function () {
    userGeneralInfo();
    addRoute(route);
}
