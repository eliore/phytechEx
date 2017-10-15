import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import {UserListItem} from "./userListItem";

const loadingImage = require('../../assets/loading.gif');

@inject('appStore') @observer
class UserList extends React.Component<any>
{
	users: any[];

	constructor(props: any) {
		super(props);

        this.onScroll = this.onScroll.bind(this);
	}

	componentWillMount(){
		//window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
        //window.removeEventListener('scroll', this.onScroll);
	}

	onScroll(event: any) {
        const e:any = event.target;

		//if ((window.innerHeight + window.scrollY) > document.body.offsetHeight - 1) {
		if ((e.offsetHeight + e.scrollTop) > e.scrollHeight -1) {
            const {loadingUsers} = this.props.appStore.usersStore;

		    !loadingUsers && this.props.appStore.usersStore.getUsers();
		}
	}

	render()
	{
		const {users} = this.props.appStore.usersStore;
        const {loadingUsers} = this.props.appStore.usersStore;

		return (
			<div onScroll={this.onScroll} className="user-list flex col-container">
				{users.map((user: any) => <div key={user.id}>
					<Link to={`/users/${user.login}`}>
						<UserListItem user={user} />
					</Link>
				</div>)}
				{(!users.length || loadingUsers) &&
				<div className="loading"><div><img src={loadingImage}/></div><div>Loading . . .</div></div>}
			</div>
		);
	}
}

export {UserList};