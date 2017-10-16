import * as React from "react";
import {inject, observer} from "mobx-react";

@inject('appStore') @observer
export class UserGeneralInfo extends React.Component<any> {


    render() {
        const {currentUser} = this.props.appStore.usersStore;

        return (<div id="user-general-info-container" className="flex">
                <div id="current-user-img-container">
                    <img id="current-user-img" src={currentUser.avatar_url}/>
                </div>
                <div id="current-user-fields-container" className="flex col-container">
                    <div className="flex">
                        <div className="current-user-field-name">
                            User ID:
                        </div>
                        <div>
                            {currentUser.id}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="current-user-field-name">
                            Username:
                        </div>
                        <div>
                            {currentUser.login}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="current-user-field-name">
                            Name:
                        </div>
                        <div>
                            {currentUser.name}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="current-user-field-name">
                            Type:
                        </div>
                        <div>
                            {currentUser.type}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="current-user-field-name">
                            Followers:
                        </div>
                        <div>
                            {currentUser.followers}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="current-user-field-name">
                            Github Url:
                        </div>
                        <div>
                            <a target="_blank" href={currentUser.html_url}>{currentUser.html_url}</a>
                        </div>
                    </div>
                </div>
            </div>);
    }
}