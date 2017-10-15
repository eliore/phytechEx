import * as React from "react";
import {inject, observer} from "mobx-react";
import {UserList} from "./userList";

@inject('appStore') @observer
export class UserListPage extends React.Component<any> {
    componentDidMount() {
        this.props.appStore.changeTab('User List');

        if (!this.props.appStore.usersStore.users.length) {
            this.props.appStore.usersStore.getUsers();
        }
    }

    render() {
        return (<div id="user-list-page" className="flex">
            <div className="flex col-container">
                <div>
                    <h2 id="users-title">Github Users</h2>
                </div>
                <UserList/>
            </div>
        </div>);
    }
}