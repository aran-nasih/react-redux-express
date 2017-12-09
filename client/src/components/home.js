import React from 'react';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

export default class Home extends React.Component{
  constructor(prpos) {
    super(prpos)

    this.state = {users: []}
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div style={{'margin': '16px'}}>
        <h2 className="section-header">Express</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.username}</li>
          )}
        </ul>
        <h2 className="section-header">React Router</h2>
        <ListItems />
        <ListItemPreview />
      </div>
    )
  }
}
