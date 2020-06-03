import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className='user-card'>
                <div className='user-details'>
                    <img src={this.props.userData && this.props.userData.avatar_url} alt='avatar' />
                    <h2 className='name'>{this.props.userData && this.props.userData.name}</h2>
                    <p className='login'>Username: {this.props.userData && this.props.userData.login}</p>
                    <p>GitHub: {this.props.userData && this.props.userData.html_url}</p>
                    <p>Bio: {this.props.userData && this.props.userData.bio}</p>
                    <p>Followers: {this.props.userData && this.props.userData.followers}</p>
                    <p>Following: {this.props.userData && this.props.userData.following}</p>
                </div>
            </div>
        )
    }
}

export default UserCard