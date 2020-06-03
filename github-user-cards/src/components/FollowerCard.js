import React from 'react'

class FollowerCard extends React.Component {
    render() {
        return (
            <div className='follower-card'>
                {
                    this.props.userFollowers && this.props.userFollowers.map(follower => {
                        return (
                            <div className='follower-details' key={follower.id}>
                                <img src={follower.avatar_url} alt='avatar' />
                                <h2 className='username'>{follower.login}</h2>
                                <p>GitHub: {follower.html_url}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FollowerCard