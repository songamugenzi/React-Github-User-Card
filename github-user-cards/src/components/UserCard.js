import React from 'react';

class UserCard extends React.Component {

    render(){
        return (
            <div className='user-card'>
                <div className='user-details'>
                    {/* <img src={this.props.userData.avatar_url} alt='avatar'/>
                    <h1 className='name'>{this.props.userData.name}</h1>
                    <p className='login'>Login: {this.props.userData.login}</p>
                    <p>GitHub URL: {this.props.userData.html_url}</p>
                    <p>Bio: {this.props.userData.bio}</p>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p> */}
                </div>
            </div>
        )
    }
}

export default UserCard