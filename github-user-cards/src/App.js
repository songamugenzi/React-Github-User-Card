import React from 'react';
import logo from './logo.svg';
// import './App.css';
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
        console.log(res.data)
        this.setState({
          userData: res.data
        });
      });

    Axios.get('https://api.github.com/users/songamugenzi/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          userFollowers: res.data
        });
      });

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to Github User Cards!</p>
        </header>
        <UserCard userData={this.state.userData} />
        <FollowerCard userFollowers={this.state.userFollowers}/>
      </div>
    );
  }
}

export default App;
