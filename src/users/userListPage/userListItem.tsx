import * as React from 'react';
import {inject, observer} from 'mobx-react';

@inject('appStore') @observer
class UserListItem extends React.Component<any> {
    user: any;

    constructor(props: any) {
        super(props);

        this.user = this.props.user;
    }

    render() {
        return (<div className="user-details row">
            <div className="col-md-3">
                <img src={this.user.avatar_url} className="user-img img-circle" />
            </div>
            <div className="col-md-9 username-text">{this.user.login} (ID: {this.user.id})</div>
        </div>);
    }
}

export {UserListItem};