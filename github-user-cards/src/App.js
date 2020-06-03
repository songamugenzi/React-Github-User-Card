import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
    this.state = {
      userFollowers: []
    };
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/songamugenzi')
      .then(res => {
        this.setState({
          userData: res.data
        });
      });

    Axios.get('https://api.github.com/users/songamugenzi/followers')
      .then(res => {
        this.setState((prevState) => {
          return {
            ...prevState,
            userFollowers: res.data
          }
        });
      });

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Checkout your followers!</p>
        </header>
        <div className='user-content'>
          <UserCard userData={this.state.userData} />
          <FollowerCard userFollowers={this.state.userFollowers} />
        </div>
      </div>
    );
  }
}

export default App;
