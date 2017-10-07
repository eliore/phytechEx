import * as React from "react";
import {inject, observer} from "mobx-react";
import {Routes} from "./userDetails.routes";
import {UserDetailsTabs} from "./userDetailsTabs";

@inject('appStore') @observer
export class UserDetailsPage extends React.Component<any> {
    componentWillMount() {
        this.props.appStore.usersStore.getUser(this.props.match.params.id);
    }

    componentDidMount() {
        if (this.props.appStore.usersStore.currentUser) {
            this.props.appStore.changeTab(`User Details (Username: ${this.props.match.params.id})`);
        }
    }

    render() {
        const {currentUser, getUserError} = this.props.appStore.usersStore;

        if (currentUser) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <UserDetailsTabs location={this.props.location} match={this.props.match}/>
                    </div>
                    <div>{Routes}</div>
                </div>);
        } else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        {!currentUser && !getUserError &&  <div className="loading">Loading . . .</div>}
                        {!currentUser && getUserError && <div className="alert alert-danger">{getUserError.status} - {getUserError.responseJSON.message}</div>}
                    </div>
                </div>
            );
        }
    }
}