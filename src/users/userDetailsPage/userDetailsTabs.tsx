import * as React from "react";
import {inject, observer} from "mobx-react";
import {Link} from 'react-router-dom';

@inject('appStore') @observer
export class UserDetailsTabs extends React.Component<any> {
    render() {
        return ( <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className={this.props.location.pathname.indexOf('generalInfo') > -1 ? "active" : ""}>
                        <Link to={`/users/${this.props.match.params.id}/generalInfo`}>
                            User General Info
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}