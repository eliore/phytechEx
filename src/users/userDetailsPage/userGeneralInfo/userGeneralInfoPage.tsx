import * as React from "react";
import {inject, observer} from "mobx-react";
import {UserGeneralInfo} from "./userGeneralInfo";

@inject('appStore') @observer
export class UserGeneralInfoPage extends React.Component<any> {
    componentDidMount() {
        setTimeout(() => {
            this.props.appStore.changeTab(<span>{`User Details (Username: ${this.props.match.params.id})`}
                > {`User General Info`}</span>);
        }, 0);
    }

    render() {
        return (<div id="user-general-info-page" className="flex">
            <div className="flex col-container">
                <div>
                    <h2 id="user-general-info-title">User General Info</h2>
                </div>
                <UserGeneralInfo/>
            </div>
        </div>);
    }
}