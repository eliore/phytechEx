import * as React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject('appStore') @observer
export class Header extends React.Component<any> {
    render() {
        let {currentTab} = this.props.appStore;

        return (<nav className="navbar">
            <div>
                <div className="flex">
                    <div className="header">
                        <div><Link to="/users">Users </Link> > {currentTab}</div>
                    </div>
                </div>
            </div>
        </nav>);
    }
}
