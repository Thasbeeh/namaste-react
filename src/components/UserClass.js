import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h1>This is rendered by a class component</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @thasbeeh</h3>
      </div>
    );
  }
}

export default UserClass;
