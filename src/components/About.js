import { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        avatar_url: 'http://dummy-photo.com',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/Thasbeeh');
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log('Componet mounted');
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {}, 1000);
    console.log('Componet updated');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Component removed');
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="about">
        <h1>About</h1>
        <h3>This is about</h3>
        <img src={avatar_url} />
        <UserClass name={name} location={location} />
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">User: {loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
