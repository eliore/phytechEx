import * as React from "react";
import {inject, observer} from "mobx-react";

@inject('appStore') @observer
export class UserGeneralInfo extends React.Component<any> {


    render() {
        const {currentUser} = this.props.appStore.usersStore;

        return (<div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img id="current-user-img" src={currentUser.avatar_url}/>
                </div>
                <div id="user-general-info-container" className="col-md-6">
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            User ID:
                        </div>
                        <div className="col-md-9">
                            {currentUser.id}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            Username:
                        </div>
                        <div className="col-md-9">
                            {currentUser.login}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            Name:
                        </div>
                        <div className="col-md-9">
                            {currentUser.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            Type:
                        </div>
                        <div className="col-md-9">
                            {currentUser.type}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            Followers:
                        </div>
                        <div className="col-md-9">
                            {currentUser.followers}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 current-user-field-name">
                            Github Url:
                        </div>
                        <div className="col-md-9">
                            <a target="_blank" href={currentUser.html_url}>{currentUser.html_url}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}