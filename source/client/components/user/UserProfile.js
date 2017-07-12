import React from 'react'

import UserStore from '../../stores/UserStore'
import UserInfo from './UserInfo'
import UserVotedMovies from './UserRatedMovies'
import UserReviews from './UserReviews'

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    let nodes = {}
    if (Array.isArray(this.state.roles)) {
      nodes.roles = this.state.roles.map((role, index) => {
        return (
          <h4 key={ index } className='lead'>
            <strong>{ role }</strong>
          </h4>
        )
      })
    }

    let userInfo = () => {
      return (
        <div>
          <UserInfo name={ this.state.name }
                    roles={ this.state.roles }
                    information={ this.state.information }
                    picture={this.state.picture || '/images/user-default.png'}
          />
          <UserVotedMovies votes={ this.state.votes }/>
          <UserReviews reviews={ this.props.reviews }/>
        </div>
      )
    }


    return (
      <div>
        {this.state.loggedInUserId ? userInfo() : ''}
      </div>
    )
  }
}

