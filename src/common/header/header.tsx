import * as React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject('appStore') @observer
export class Header extends React.Component<any>
{
	render()
	{
		let {currentTab} = this.props.appStore;

        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="row">
                    <div className="navbar-header"><div className="navbar-brand"><Link to="/users">Users </Link> <span className="glyphicon glyphicon-menu-right"></span> {currentTab}</div></div>
                </div>
            </div>
        </nav>);
	}
}
