import * as React from "react";
import {inject, observer} from "mobx-react";
import {UserList} from "./userList";

@inject('appStore') @observer
export class UserListPage extends React.Component<any> {
    componentDidMount(){
        this.props.appStore.changeTab('User List');

        if (!this.props.appStore.usersStore.users.length) {
            this.props.appStore.usersStore.getUsers();
        }
    }

    render() {
        return (<div className="container">
            <div className="row">
                <h2>Github Users</h2>
            </div>
            <UserList/>
        </div>);
    }
}