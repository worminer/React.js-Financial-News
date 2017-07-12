import React from 'react'

import UserStore from '../../stores/UserStore'
import UserInfo from './UserInfo'
import UserVotedArticles from './UserRatedArticles'
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
    nodes.roles = this.state.roles.map((role, index) => {
      return (
        <h4 key={ index } className='lead'>
          <strong>{ role }</strong>
        </h4>
      )
    })

    return (
      <div>
        <UserInfo name={ this.state.name }
                  roles={ this.state.roles }
                  information={ this.state.information }/>
        <UserVotedArticles votes={ this.state.votes }/>
        <UserReviews reviews={ this.props.reviews }/>
      </div>
    )
  }
}

