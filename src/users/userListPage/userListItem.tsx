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
        return (<div className="user-details flex">
            <div>
                <img src={this.user.avatar_url} className="user-img" />
            </div>
            <div className="username-text">{this.user.login} (ID: {this.user.id})</div>
        </div>);
    }
}

export {UserListItem};