import * as React from "react";
import {inject, observer} from "mobx-react";
import {UserGeneralInfo} from "./userGeneralInfo";

@inject('appStore') @observer
export class UserGeneralInfoPage extends React.Component<any> {
    componentDidMount() {
        setTimeout(() => {
            this.props.appStore.changeTab(<span>{`User Details (Username: ${this.props.match.params.id})`} <span className="glyphicon glyphicon-menu-right"></span> {`User General Info`}</span>);
        }, 0);
    }

    render() {
        return (<div className="container">
            <div className="row">
                <h2>User General Info</h2>
            </div>
            <UserGeneralInfo/>
        </div>);
    }
}