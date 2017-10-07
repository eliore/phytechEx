import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import {UserListItem} from "./userListItem";

@inject('appStore') @observer
class UserList extends React.Component<any>
{
	users: any[];

	constructor(props: any) {
		super(props);

        this.onScroll = this.onScroll.bind(this);
	}

	componentWillMount(){
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
	}

	onScroll(event: any) {
		if ((window.innerHeight + window.scrollY) > document.body.offsetHeight - 1) {
            const {loadingUsers} = this.props.appStore.usersStore;

		    !loadingUsers && this.props.appStore.usersStore.getUsers();
		}
	}

	render()
	{
		const {users} = this.props.appStore.usersStore;
        const {loadingUsers} = this.props.appStore.usersStore;

		return (
			<div className="user-list row">
				{users.map((user: any) => <div key={user.id}>
					<Link to={`/users/${user.login}`}>
						<UserListItem user={user} />
					</Link>
				</div>)}
				{(!users.length || loadingUsers) &&
				<div className="loading">Loading . . .</div>}
			</div>
		);
	}
}

export {UserList};